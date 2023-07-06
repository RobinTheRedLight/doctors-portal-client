import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import CheckoutForm from './Checkout';


const stripePromise = loadStripe('pk_test_51NQlOLDPTKgNkuIzcOZ4qu93XiGXlv5qL4iVdbbpT3mxG2y0PobcJZj2mgpk1kFYedQYxIsZ2v3vSswLBUr7wxNE008dEqEMI5');

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;