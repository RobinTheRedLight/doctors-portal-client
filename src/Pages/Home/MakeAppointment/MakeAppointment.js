import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} className="lg:w-1/2 rounded-lg -mt-36 hidden md:block" alt='' />
                    <div>
                        <h6 className="text-primary text-lg font-semibold">Appointment</h6>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">Transform your dental health with a simple click. Our team of experienced professionals is ready to provide personalized care for your unique needs. Don't wait any longer—schedule an appointment today and embark on your journey towards a brighter, healthier smile.</p>
                        <div className='max-sm:mb-5'>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;