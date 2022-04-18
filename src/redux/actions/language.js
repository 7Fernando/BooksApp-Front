import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const typesLanguages = {
  GET_ALL_LANGUAGE:"GET_ALL_LANGUAGE",
  GET_LANGUAGE_BOOK:"GET_AUTHORS_BOOK"
};

export const getLanguage = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/language`);
      return dispatch({
        type: typesLanguages.GET_ALL_LANGUAGE,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
export const getLanguageBook = (name) => {
    try {
      return async (dispatch) => {
        const { data } = await axios.get(`${url}/language/S?name=${name}`);
        console.log('data',data.book);
        return dispatch({
          type: typesLanguages.GET_LANGUAGE_BOOK,
          payload: data.book,
        });
      };
    } catch (error) {
      console.error(error);
    }
  };