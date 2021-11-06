import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  Content,
  ContainerInputs,
  ContainerTextArea,
  Footer,
  Mensage,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

function Form({ initialData, data, setData, isEdit, onSubmitForm }) {
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const [authors, setAuthors] = useState([]);

  const loadAuthors = async () => {
    try {
      const response = await api.get("/author");
      const { author } = response.data;

      setAuthors(author);
    } catch (error) {
      console.log("Ops erro", error);
    }
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  const handleChange = (e, vlr, { data, setData }) => {
    const auxValues = { ...data };
    const inputName = e.target.name;
    auxValues.default[inputName] = vlr;

    setData(auxValues);
  };

  return (
    <Container>
      <Content className="row g-2 col-12">
        <ContainerInputs className="col-6">
          <label>Titulo:</label>
          <Input
            Type="text"
            Name="title"
            TextPlaceholder="digite o titulo da noticia..."
            Value={initialData.title}
            OnChange={(e) => handleChange(e, e.target.value, { data, setData })}
          />
        </ContainerInputs>
        <ContainerInputs className="col-6">
          <label>Autor:</label>
          <select
            className="form-control"
            name="author"
            value={initialData.author}
            onChange={(e) => handleChange(e, e.target.value, { data, setData })}
          >
            <option value="">Selecione Author</option>
            {authors.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </ContainerInputs>
        <ContainerTextArea className="col-12">
          <label>Post:</label>
          <TextArea
            Name="post"
            Value={initialData.post}
            OnChange={(e) => handleChange(e, e.target.value, { data, setData })}
          />
        </ContainerTextArea>
      </Content>

      <Footer>
        <Button title="Cancelar" click={() => history.goBack()} />
        <Button
          title="Salvar"
          kind="isEdit"
          click={(e) => onSubmitForm(e, { setAlert, setMsg })}
        />
      </Footer>
      <div className="table-responsive col-lg-6 col-12">
        {alert && (
          <Mensage className="col-12 alert alert-danger small" role="alert">
            {msg}
          </Mensage>
        )}
      </div>
    </Container>
  );
}

export default Form;
