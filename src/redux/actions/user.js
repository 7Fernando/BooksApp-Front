import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const typesUser = {
    POST_USER: "POST_USER",
  };

  export const postUser = (user) => {
    return (dispatch) => {
      return axios.post(`${url}/users`, user)
        .then(response => {
          dispatch({
            type: typesUser.POST_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw error;
        });
    };
  }