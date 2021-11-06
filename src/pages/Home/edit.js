import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import Form from "../../components/Form";

// import { Container } from './styles';

function Edit(props) {
  const [data, setData] = useState({});
  const id = props.match.params.id;

  const loadData = async () => {
    try {
      const response = await api.get(`notice/${id}`);
      const { notice } = response.data;
      setData(notice);
    } catch (error) {
      console.log("Ops -> Erro", error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout title="Editar Noticia" isSearch={false}>
      <Form
        initialData={data ? data : undefined}
        initialAuthor={data.author ? data.author : undefined}
        data={data}
        setData={setData}
      />
    </Layout>
  );
}

export default Edit;
