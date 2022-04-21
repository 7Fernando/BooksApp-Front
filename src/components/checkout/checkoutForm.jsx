import {
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaStripe } from "react-icons/fa";
import { Center, Flex } from "@chakra-ui/react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");

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
      console.log(result.error.message);
      // Swal.fire({
      //   title: result.error.message,
      //   icon: "info",
      //   timer: 4000,
      //   timerProgressBar: true,
      // });
    
    } else {
      console.log(result);
      const res = await axios.post("http://localhost:3000/sub", {
        payment_method: result.paymentMethod.id,
        email: email,
      });
      // eslint-disable-next-line camelcase
      const { client_secret, status } = res.data;

      if (status === "requires_action") {
        stripe.confirmCardPayment(client_secret).then(function (result) {
          if (result.error) {
            console.log("There was an issue!");
            console.log(result.error);
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc)
          } else {
            console.log("You got the money!");
            // Show a success message to your customer
          }
        });
      } else {
        console.log("You got the money!");
        // No additional information was needed
        // Show a success message to your customer
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
            onClick={handleSubmitSub}
          >
            Pay
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default CheckoutForm;
