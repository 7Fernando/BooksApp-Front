import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";

const PUBLIC_KEY =
  "pk_test_51KbWGnKtLAVaA2OOASlQxw9JtlCly3EiI1iEsBzJ53sjgoLoCMpCAwm6Hg6NbNo7BQzjal5Fp75exOsDqBOM66ES000f5v0HgQ";
//"pk_test_51KbQJ1Jx3UlXGWRupFNnUw3mQU4mri2NEVaDEf6NRW8obts6Zx0k5v9r7PL9a6J182GkNT8e0o9yeuTqbaRD43ob00au1GlukH";
//MATI "pk_test_51KbWGnKtLAVaA2OOASlQxw9JtlCly3EiI1iEsBzJ53sjgoLoCMpCAwm6Hg6NbNo7BQzjal5Fp75exOsDqBOM66ES000f5v0HgQ";
const stripeTestPromise = loadStripe(PUBLIC_KEY, { locale: "en" });

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
