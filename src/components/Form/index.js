import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  Content,
  ContainerInputs,
  ContainerTextArea,
  Footer,
} from "./styles";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
// import { handleChange } from "../../util/functions";

function Form({ initialData, initialAuthor, data, setData }) {
  const history = useHistory();
  const [author, setAuthor] = useState({});
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

  useEffect(() => {
    if (initialAuthor) {
      setAuthor(initialAuthor);
    }
  }, [initialAuthor]);

  const handleChange = (value, { data, setData }) => {
    console.log("🚀 ~ file: index.js ~ line 44 ~ handleChange ~ value", value);
  };

  return (
    <Container>
      <Content className="row g-2 col-12">
        <ContainerInputs className="col-6">
          <label>Titulo:</label>
          <Input
            Type="text"
            TextPlaceholder="digite o titulo da noticia..."
            Value={initialData.title}
            OnChange={(e) => handleChange(e.target.value, { data, setData })}
          />
        </ContainerInputs>
        <ContainerInputs className="col-6">
          <label>Autor:</label>
          <select className="form-control" value={author._id ? author._id : ""}>
            <option value="">Selecione!</option>
            {authors ? (
              authors.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="">Não existe authores cadastrados!</option>
            )}
          </select>
        </ContainerInputs>
        <ContainerTextArea className="col-12">
          <label>Post:</label>
          <TextArea Value={initialData.post} />
        </ContainerTextArea>
      </Content>

      <Footer>
        <Button title="Cancelar" click={() => history.goBack()} />
        <Button title="Salvar" kind="isEdit" />
      </Footer>
    </Container>
  );
}

export default Form;
