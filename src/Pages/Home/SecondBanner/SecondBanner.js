import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const SecondBanner = () => {
    return (
        <div className='lg:mx-40 mt-14'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='' className='lg:w-96 lg:pr-10' />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">At Doctor's Portal, we redefine dental care by offering a personalized approach that puts you in control. Our dedicated team of skilled professionals delivers exceptional services, ensuring your oral health is a top priority. Experience excellence, convenience, and satisfaction as we cater to your unique dental needs. Your smile deserves the best.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;