import axios from "axios";
import Home from "../../pages/Home";
import Plans from "../checkout/plans";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Center, Spinner } from "@chakra-ui/react";


const Validation = () => {
  
  const [loading, setLoading] = useState(false);
  const [permission, setPermission] = useState("");
  const url = `https://bookflix-back.herokuapp.com/api/sub/confirmation`;
  const { user, getAccessTokenSilently, isLoading } = useAuth0();

  useEffect(() => {
    const userValidate = async () => {
      setLoading(true);
      const newUser = {
        mail: user?.email,
        name: user?.nickname,
        picture: user?.picture,
      };

      
      const setToken = await getAccessTokenSilently();
      localStorage.setItem("token", setToken);
      localStorage.setItem("user", newUser?.mail);
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("user");

      const autorizacion = {
        headers: { authorization: `Bearer ${token}`, userMail: userEmail },
      };

      const getValidation = await axios.get(url, autorizacion);

      if (getValidation?.data) {
         setPermission(getValidation?.data);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      
    };
    userValidate();
  }, [isLoading]);

  if (loading) {
    return (
      <>
        <Center mt="15%">
          <Spinner
            thickness="4px"
            speed="0.2s"
            emptyColor="gray.200"
            color="#553C9A"
            size="xl"
          />
        </Center>
      </>
    );
  }
  return <>{permission === "Already paid" ? <Home /> : <Plans />}</>;
};
export default Validation;
