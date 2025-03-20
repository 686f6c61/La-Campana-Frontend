import React from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CartSummary from "../components/Checkout/CartSummary";


const Checkout = () => {
  return (
    <div className="font-sans">
      <CheckoutForm />
      <CartSummary />
      
    </div>
    
  );
};

export default Checkout;
