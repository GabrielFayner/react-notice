import api from "../../services/api";

export const handleSubmit = async (
  e,
  { isEdit, id, data, history, setAlert, setMsg }
) => {
  e.preventDefault();

  const { title, post, author } = data.default;

  if (!title || !post || !author) {
    setAlert(true);
    setMsg("Campos obrigatórios");

    setTimeout(() => {
      setAlert(false);
      setMsg("");
    }, 3000);
    return false;
  }

  try {
    if (!isEdit) {
      await api.post("notice", {
        title: data.default.title,
        post: data.default.post,
        author: data.default.author,
      });
    } else {
      await api.put(`notice/${id}`, {
        title: data.default.title,
        post: data.default.post,
        author: data.default.author,
      });
    }
    setTimeout(() => {
      history.goBack();
    }, 500);
  } catch (error) {
    console.log("Ops => ", error);
  }
};
export const findDataToId = async (id, data, setData) => {
  try {
    const response = await api.get(`notice/${id}`);
    const { notice } = response.data;

    if (data) {
      setData((prevState) => {
        return {
          ...prevState,
          id: notice.id,
          default: {
            title: notice.title,
            post: notice.post,
            author: notice.author._id,
          },
        };
      });
    }
  } catch (error) {
    console.log("Ops => ", error);
  }
};
