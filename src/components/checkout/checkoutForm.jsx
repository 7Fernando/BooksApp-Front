import {
  Box,
  Input,
  Alert,
  AlertIcon,
  Button,
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
import { useState } from "react";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");

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
    console.log(115, result.paymentMethod.id);
    if (result.error) {
      console.error(result.error.message);
    } else {
      //console.log(result);
      const res = await axios.post("http://localhost:3001/api/sub", {
        payment_method: result.paymentMethod.id,
        email: email,
        idPlan: id,
      });

      console.log(111, res);
      console.log(112, message);
      // eslint-disable-next-line camelcase
      setMessage(res.data?.hola?.latest_invoice?.payment_intent?.status);
      // const { client_secret, status } = res.data;
      setErrorMessage(res.data);
      setLoading(false);
      elements.getElement(CardElement).clear();
      setEmail("")
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              setLoading(true);
            }}
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
        <Box display={message !== "" ? display : "none"}>
          {message === "succeeded" ? (
            <Alert status="success">
              <AlertIcon />
              Successful payment!
            </Alert>
          ) : (
            <Alert status="error" p="7">
              <AlertIcon />
              There was an error processing your request: "{errorMessage}"
            </Alert>
          )}
        </Box>
      </Box>
    </>
  );
};
export default CheckoutForm;
