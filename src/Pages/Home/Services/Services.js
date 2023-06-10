import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Protect teeth from decay with fluoride treatment for a strong, cavity-free smile.",
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Explore Cavity Filling, a dental procedure that restores decayed teeth for a healthier smile..",
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Illuminate your smile with Teeth Whitening, a cosmetic procedure for a brighter smile.",
            img: whitening
        }
    ]

    return (
        <div className='text-center mt-16'>
            <div>
                <h3 className='text-lg text-secondary uppercase font-bold'>Our Services</h3>
                <h1 className='text-3xl font-normal mt-3'>Services We Provide</h1>
            </div>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        > </Service>)
                }
            </div>
        </div>
    );
};

export default Services;