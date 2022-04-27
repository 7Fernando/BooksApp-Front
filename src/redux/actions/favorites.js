import axios from "axios";
const token = localStorage.getItem("token");

const url = import.meta.env.VITE_BASE_URL;

export const typesFavorites = {
  GET_ALL_FAVORITES: "GET_ALL_FAVORITES",
  POST_FAVORITES : "POST_FAVORITES",
  DELETE_FAVORITES:"DELETE_FAVORITES"

};

const autorizacion = {
  headers: { authorization: `Bearer ${token}` },
};

export const getAllFavorites = (id) => {
  return async (dispatch) => {
    try{     
    const { data } = await axios.get(`${url}/favorites/?mail=${id}`, autorizacion);
    
    return dispatch({
      type: typesFavorites.GET_ALL_FAVORITES,
      payload: data,
    });
  
   } catch (error) {
    return dispatch({
      type: typesFavorites.GET_ALL_FAVORITES,
      payload: [],
    });
}
}};


export const addFavorites = (body) =>  {
  return async (dispatch)=>{ try {
     const {data} = await axios.post(`${url}/favorites`, body, autorizacion);
     
     return dispatch({
       type: typesFavorites.POST_FAVORITES,
       payload: data,
     });
   } catch (error) {
     console.log(error);
   }
 };
};


export const removeFavorites = (id, bookId) => async () => {
  try {
    await axios.delete(`${url}/favorites/?userId=${id}&bookId=${bookId}`, autorizacion);
  } catch (error) {
    console.log(error);
  }
};


