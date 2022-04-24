import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
const token = window.localStorage.getItem("token");
const options = { 
  headers: { "authorization": `Bearer ${token}` },
}
export const typesUser = {
    POST_USER: "POST_USER",
    GET_ALL_USER: "GET_ALL_USER",
  };

  export const postUser = (user) => {
    return (dispatch) => {
      return axios.post(`${url}/users`, user, options)
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
  export const getUser = () => {
    return (dispatch) => {
      return axios.get(`${url}/users`)
        .then(response => {
          dispatch({
            type: typesUser.GET_ALL_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw error;
        });
    };
  }