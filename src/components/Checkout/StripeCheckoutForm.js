import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        if (error) {
            setError(error.message);
            setPaymentSuccess(null);
        } else {
            setError(null);
            setPaymentSuccess(paymentMethod.id);

            // You can send the paymentMethod.id to your server for processing here
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement style={{ width: '100%' }} />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {paymentSuccess && <p style={{ color: 'green' }}>Payment successful</p>}
            </form>
        </>
    );
};

export default StripeCheckoutForm;
