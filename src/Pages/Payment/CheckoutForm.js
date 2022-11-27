import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {

    const [cardError, setCardError] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const { name, email, _id, productID } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            fetch(`http://localhost:5000/paid?id=${_id}&productID=${productID}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Successfully Paid')
                    navigate('/dashboard/myorders')
                })

        }
        console.log(paymentIntent);

    }
    console.log(`http://localhost:5000/paid?id=${_id}&productID=${productID}`)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success mt-3 w-full' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-error'>{cardError}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;