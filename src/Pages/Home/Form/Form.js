import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Form = () => {
    return (
        <div className='flex flex-col items-center p-5 mt-28' style={{ background: `url(${appointment})`, backgroundSize: 'cover' }}>
            <div className='text-center mt-10'>
                <p className='font-bold text-secondary text-lg'>Contact Us</p>
                <h3 className='text-3xl text-white'>Stay connected with us</h3>
            </div>
            <div className='text-center mt-5'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs mt-3" />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mt-3" />
                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-md w-full max-w-xs mt-3" ></textarea>
            </div>
            <div className=' mt-3 mb-10'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Form;