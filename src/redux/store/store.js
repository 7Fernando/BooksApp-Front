import { configureStore } from "@reduxjs/toolkit";
import  testReducer  from "../reducers/testReducer";


export default configureStore({
  reducer: {test:testReducer}
});
