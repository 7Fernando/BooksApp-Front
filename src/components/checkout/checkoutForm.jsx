import axios from "axios";
import {
  Box,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaStripe } from "react-icons/fa";
import { Center, Flex } from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async () => {
    
    e.preventDefault();

    //When executing the payment method maybe it goes well (paymentMethod) maybe not (error)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
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
        <Box mb="5" boxShadow='base' p="4" borderRadius="5">
          <CardElement></CardElement>
        </Box>

        <Box color="gray.500">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email"  boxShadow='base' border="none"/>
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
          >
            Pay
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default CheckoutForm;
