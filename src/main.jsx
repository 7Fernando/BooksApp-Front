import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//IMPORTANDO STORE Y PROVIDER
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
