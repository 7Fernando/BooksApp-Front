import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";

const key =
  "pk_test_51KbQJ1Jx3UlXGWRupFNnUw3mQU4mri2NEVaDEf6NRW8obts6Zx0k5v9r7PL9a6J182GkNT8e0o9yeuTqbaRD43ob00au1GlukH"

const stripeTestPromise = loadStripe(key, { locale: "en" });

const CheckoutContainer = () => {
  return (
    <div>
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
export default CheckoutContainer;
