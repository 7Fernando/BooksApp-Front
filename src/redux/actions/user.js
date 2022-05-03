import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
export const typesUser = {
  POST_USER: "POST_USER",
  GET_ALL_USER: "GET_ALL_USER",
  GET_USER: "GET_USER",
  UPDATE_USER: "UPDATE_USER",
};

import { autorizacion, authorizationAdmin } from "../../helpers/token";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const postUser = (user) => {
  return (dispatch) => {
    return axios
      .post(`${url}/users`, user, authorizationAdmin())
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
    return axios
      .get(`${url}/users`)
      .then((response) => {
        dispatch({
          type: typesUser.GET_ALL_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const getUserByMail = (email) => {
  return (dispatch) => {
    return axios
      .get(`${url}/users/profile/${email}`, autorizacion())
      .then((response) => {
        dispatch({
          type: typesUser.GET_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const modifyUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${url}/users/modify`,
        user,
        autorizacion()
      );
      dispatch({
        type: typesUser.UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};
