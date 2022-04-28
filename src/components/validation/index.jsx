import { LocalStorageCache } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../../pages/Home";
import Plans from "../checkout/plans";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react';
import { BsTypeH2 } from "react-icons/bs";

const Validation = () => {

  const [permission, setPermission] = useState("");
  const url = "http://localhost:3001/api/sub/confirmation";
  const { user, getAccessTokenSilently, isLoading } = useAuth0();
  
  useEffect(() => {
    const userValidate = async () => 
    {
      const newUser = {
        mail: user?.email,
        name: user?.nickname, 
        picture: user?.picture 
      }
     
      window.localStorage.setItem("user",newUser?.mail)
      const setToken = await getAccessTokenSilently()
      window.localStorage.setItem('token', setToken)
      const userEmail = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      const autorizacion = {
        headers: { authorization: `Bearer ${token}`, userMail: userEmail },
      };

      const getValidation = await axios.get(url, autorizacion);

      if(getValidation?.data){
          setPermission(getValidation?.data)
      }
    };
    userValidate();
  }, [isLoading]);

  if(isLoading){
    return(<><h2>Loading...</h2></>)
  }
  return (
    <> 
      { permission === 'Already paid' ?  <Home/> :< Plans/>  }
    </>
  );
};
export default Validation;
