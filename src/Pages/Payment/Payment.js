import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../SharedComponent/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`http://localhost:5000/order?id=${id}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loader />
    }
    console.log(data)
    return (
        <div>
            <h1 className='text-4xl font-bold merFont text-center my-5'> Payment for {data.productName}</h1>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-96' src={data.productImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.productName}</h2>
                    <p className='mb-3 font-semibold text-md'>Amount: ${data.price}</p>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={data} />
                        </Elements>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;