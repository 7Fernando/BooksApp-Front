import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//IMPORTANDO STORE Y PROVIDER
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <HashRouter>
      
          <App />
       
      </HashRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
