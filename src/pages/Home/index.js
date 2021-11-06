import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

function Home() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await api.get("/notice");
      const { notices } = response.data;
      setData(notices);
    } catch (error) {
      console.log("Ops -> Erro", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout title="Noticia" isListOrForm>
      {data &&
        data.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            author={item.author.name}
            post={item.post}
            id={item._id}
            getNotices={loadData}
            data={data}
            setData={setData}
          />
        ))}
    </Layout>
  );
}

export default Home;
