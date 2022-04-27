import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
export const typesUser = {
    POST_USER: "POST_USER",
    GET_ALL_USER: "GET_ALL_USER",
    GET_USER: "GET_USER",
  };

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const autorizacion = {
  headers: { authorization: `Bearer ${token}` },
};
const authorizationAdmin = {
  headers: { authorization: `Bearer ${token}`, user: user },
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
  export const getUserByMail = (email) => {
    return (dispatch) => {
      return axios.get(`${url}/users/profile/${email}`)
        .then(response => {
          dispatch({
            type: typesUser.GET_USER,
            payload: response.data
          });
        })
        .catch(error => {
          throw error;
        });
    };
  }
