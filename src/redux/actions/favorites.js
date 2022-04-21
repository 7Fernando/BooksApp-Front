import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const typesFavorites = {
  GET_ALL_FAVORITES: "GET_ALL_FAVORITES",
  PUT_FAVORITES : "PUT_FAVORITES",
  DELETE_FAVORITES:"DELETE_FAVORITES"

};

export const getAllFavorites = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/favorites/?id=${id}`);
    
      return dispatch({
        type: typesFavorites.GET_ALL_FAVORITES,
        payload: data
      },);
     
    };
  } catch (error) {
    console.error(error);
  }
};


export const addFavorites = async (hola) => {
    try {
     await axios.post(`${url}/favorites`, hola);
     
        return ({
          type: typesFavorites.PUT_FAVORITES,

        })
    } catch (error) {
      console.log('en la accion', error);
    }
  };


  export const removeFavorites = (id, bookId) => {
    try {
      return async (dispatch) => {
      await axios.delete(`${url}/favorites/?userId=${id}&bookId=${bookId}`);

      return dispatch({
        type: typesFavorites.DELETE_FAVORITES,
       
      })}
    } catch (error) {
      console.log(error);
    }
  };  

