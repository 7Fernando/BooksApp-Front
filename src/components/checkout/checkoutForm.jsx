import {
  Box,
  Input,
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormLabel,
  FormControl,
  FormHelperText,
  Spinner,
  Center,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../redux/actions/user";
import { getBooks } from "../../redux/actions/books";
import { Link, useParams, useNavigate } from "react-router-dom";


const CheckoutForm = () => {
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailLc = localStorage.getItem("user");
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("none");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, getAccessTokenSilently, isLoading } = useAuth0();

  const newUser = {
    mail: user?.email,
    name: user?.nickname,
    picture: user?.picture,
  };

  useEffect(() => {
    const f = async () => {
      window.localStorage.setItem("user", newUser.mail);
      const token = await getAccessTokenSilently();
      window.localStorage.setItem("token", token);
      const email2 = localStorage.getItem("user");
      dispatch(getBooks(token, email2));
    };
    f();

    if (isLoading === false) {
      dispatch(postUser(newUser));
    }
  }, [isLoading]);

  const token = localStorage.getItem("token");

  const autorizacion = {
    headers: { authorization: `Bearer ${token}`, userMail: emailLc },
  };
  const handleSubmitSub = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      },
    });
    //console.log(115, result.paymentMethod.id);
    if (result.error) {
      console.log(112, result.error.message);
      setErrorMessage(result.error.message);
      console.log(115, errorMessage);
    } else {
      //console.log(result);

      setLoading(true);

      const res = await axios.post(
        "http://localhost:3001/api/sub",
        {
          payment_method: result.paymentMethod.id,
          email: email,
          idPlan: id,
        },
        autorizacion
      );
      console.log(150, res);
      const res2 = await axios.put(
        "http://localhost:3001/api/users/updateSub",
        {
          idSub: res?.data?.hola?.id,
          userMail: emailLc,
        },
        autorizacion
      );

      const update = await axios.put("http://localhost:3001/api/sub", {
       email: emailLc,
       idPlan: id,
     }, autorizacion);

      // eslint-disable-next-line camelcase
      setMessage(res.data?.hola?.latest_invoice?.payment_intent?.status);
      // const { client_secret, status } = res.data;
     
      setErrorMessage(res.data);
      setLoading(false);
      elements.getElement(CardElement).clear();
      setEmail("");
      setRedirect(true)
      // if (status === "requires_action") {
      //   stripe.confirmCardPayment(client_secret).then(function (result) {
      //     if (result.error) {
      //       console.log("There was an issue!");
      //       console.log(result.error);
      //       // Display error message in your UI.
      //       // The card was declined (i.e. insufficient funds, card has expired, etc)
      //     } else {
      //       console.log("You got the money!");
      //       // Show a success message to your customer
      //     }
      //   });
      // } else {
      //   console.log("You got the money!");
      //   // No additional information was needed
      //   // Show a success message to your customer
      // }
    }
    
  
    
  };
  return (
    <>
      <Box
        ml="25vw"
        w="50vw"
        mt="15vh"
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="white"
      >
        <Box mb="5" boxShadow="base" p="4" borderRadius="5">
          <CardElement></CardElement>
        </Box>
        <Box color="gray.500">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              boxShadow="base"
              border="none"
              value={emailLc}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="solid"
            mt="35"
            bg="green.400"
            color="white"
            w="full"
            _hover={{ bg: "green.300", border: "2px", borderColor: "green" }}
            letterSpacing="2px"
            onClick={() => {
              handleSubmitSub();
              setDisplay("Flex");
            }}
            display={redirect ? "none" : "block"}
          >
            {loading ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="red.200"
                color="white.500"
                size="md"
              />
            ) : (
              "Pay"
            )}
          </Button>
        </Box>
        <Link to="/home">
            <Button
              variant="solid"
              mt="5"
              bg="green.400"
              color="white"
              w="full"
              _hover={{ bg: "green.300", border: "2px", borderColor: "green" }}
              letterSpacing="2px"
              display={redirect ? "block" : "none"}
            >
             GO TO HOME & START TO ENJOY
            </Button>
          </Link>
        <Box
          display={message !== "" || errorMessage !== "" ? display : "none"}
          mt="-0.5"
          zIndex={"hide"}
        >
          {message === "succeeded" ? (
            <Alert status="success" mt="0" borderRadius={"5"}>
              <AlertIcon />
              Successful payment!
            </Alert>
          ) : (
            <Alert status="error" p="2" justifyContent={"center"}>
              <AlertIcon />
              <Flex flexDir={"column"} ml="3">
                <Box> There was an error processing your request:</Box>

                <Box mt="3"> "{errorMessage}"</Box>
              </Flex>
            </Alert>
          )}
        </Box>
        <Box>
         
        </Box>
      </Box>
    </>
  );
};
export default CheckoutForm;
