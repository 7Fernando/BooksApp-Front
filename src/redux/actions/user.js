import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const autorizacion = {
  headers: { authorization: `Bearer ${token}` },
};
const authorizationAdmin = {
  headers: { authorization: `Bearer ${token}`, user: user },
};

export const typesUser = {
  POST_USER: "POST_USER",
};

export const postUser = (user) => {
  return (dispatch) => {
    return axios
      .post(`${url}/users`, user, authorizationAdmin)
      .then((response) => {
        dispatch({
          type: typesUser.POST_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
