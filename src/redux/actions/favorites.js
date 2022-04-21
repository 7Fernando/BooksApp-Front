import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const typesFavorites = {
  GET_ALL_FAVORITES: "GET_ALL_FAVORITES",

};

export const getAllFavorites = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/favorites`);
      return dispatch({
        type: typesFavorites.GET_ALL_FAVORITES,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};


export const addFavorites = (id, bookId) => async () => {
    try {
      await axios.post(`${URL}user/${id}/favorite/${bookId}`);
    } catch (error) {
      console.log(error);
    }
  };


  export const removeFavorites = (id, bookId) => async () => {
    try {
      await axios.delete(`${URL}user/${id}/delete/${bookId}`);
    } catch (error) {
      console.log(error);
    }
  };  

