import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import api from "../../services/api";
import Layout from "../../components/Layout";
import Form from "../../components/Form";
import { findDataToId, handleSubmit } from "./actions";

function FormNotice(props) {
  const { id } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [isEdit] = useState(url.includes("edit"));
  const [data, setData] = useState({
    id: id || null,
    default: {
      title: "",
      post: "",
      author: "",
    },
  });

  const loadData = async () => {
    try {
      const response = await api.get(`notice/${id}`);
      const { notice } = response.data;
      setData(notice);
    } catch (error) {
      console.log("Ops -> Erro", error);
    }
  };

  const onSubmitForm = (e, { setAlert, setMsg }) => {
    handleSubmit(e, {
      isEdit,
      id,
      data,
      history,
      setAlert,
      setMsg,
    });
  };

  useEffect(() => {
    if (isEdit) {
      findDataToId(id, data, setData);
    }
  }, [isEdit]);

  return (
    <Layout
      title={isEdit ? "Editar Cadastro" : "Criar Novo"}
      isListOrForm={false}
    >
      <Form
        initialData={data ? data.default : undefined}
        data={data}
        setData={setData}
        isEdit={isEdit}
        onSubmitForm={onSubmitForm}
      />
    </Layout>
  );
}

export default FormNotice;
