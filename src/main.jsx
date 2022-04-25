import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//IMPORTANDO STORE Y PROVIDER
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ChakraProvider } from "@chakra-ui/react";

//IMPORTANDO AUTH0
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirect = import.meta.env.VITE_REDIRECT_AUTH0_CALLBACK_URL;
const audience = import.meta.env.VITE_SECRETO
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <HashRouter>
        <Auth0Provider 
        domain={domain}
        clientId={clientId}
        redirectUri={redirect}
        audience="secreto"
        >
        <App />
      </Auth0Provider>
      </HashRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
