import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Welcome to Doctor's Portal, your trusted source for reliable healthcare information and comprehensive resources on various medical treatments.</p>
            <PrimaryButton> Get Started </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;