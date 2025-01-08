'use client'
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Stripe publishable key
const stripePromise = loadStripe("pk_test_51QRViqCQtwwsqmip1ieMINus9dg7esu1JBpkHujr3BMTqfUdJzhHeuSsW1X7pbBr1uhRk4w3xbJ68g7woSoM6YyR00kYfRjbyS");

const CheckoutForm = () => {
    // Fetch client secret using Axios
    /* const fetchClientSecret = useCallback(() => {
      return axios
        .post("http://localhost:8000/api/checkout")
        .then((response) => response.data.clientSecret)
        .catch((error) => {
          console.error("Error fetching client secret:", error);
          throw error;
        });
    }, []);
  
    const options = { fetchClientSecret }; */
    const fetchClientSecret = useCallback(async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/checkout");
            return response.data.clientSecret;
        } catch (error) {
            console.error("Error fetching client secret:", error);
            throw error;
        }
    }, []);
    const options = { fetchClientSecret };

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    );
};

export default CheckoutForm;
