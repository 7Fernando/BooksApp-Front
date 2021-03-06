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
import { Link, useParams } from "react-router-dom";
import { postUser } from "../../redux/actions/user";
import { getBooks } from "../../redux/actions/books";


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

    if (result.error) {
      setErrorMessage(result.error.message);
    } else {
      setLoading(true);
     
      const res = await axios.post(
        `https://bookflix-back.herokuapp.com/api/sub`,
        {
          payment_method: result.paymentMethod.id,
          email: emailLc,
          idPlan: id,
        },
        autorizacion
      );
    
      const res2 = await axios.put(
        `https://bookflix-back.herokuapp.com/api/users/updateSub`,
        {
          idSub: res?.data?.hola?.id,
          userMail: emailLc,
        },
        autorizacion
      );


      const update = await axios.put(
        `https://bookflix-back.herokuapp.com/api/sub`,
        {
          email: emailLc,
          idPlan: id,
        },
        autorizacion
      );

      setMessage(res.data?.hola?.latest_invoice?.payment_intent?.status);
      setErrorMessage(res.data);
      setLoading(false);
      elements.getElement(CardElement).clear();
      setEmail("");
      if (res.data?.hola) {
        setRedirect(true);
      }
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
        <Box mb="5" boxShadow="base" p="4" borderRadius="5"  display={redirect ? "none" : "block"}>
          <CardElement></CardElement>
        </Box>
        <Box color="gray.500"  display={redirect ? "none" : "block"}>
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
        <Box></Box>
      </Box>
    </>
  );
};
export default CheckoutForm;
