import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {

    const reviews = [
        {
            _id: '1',
            name: 'Winson Herry',
            img: people1,
            description: '"Friendly, skilled, and painless dental experience. Highly recommended!"',
            location: 'California',
        },
        {
            _id: '2',
            name: 'Isabella Johnson',
            img: people2,
            description: '"Exceptional dentist, gentle and thorough.Couldn\'t be happier!"',
            location: 'Washington',
        },
        {
            _id: '3',
            name: 'Sophia Martinez',
            img: people3,
            description: '"Efficient, professional, and top-notch dental care. Very satisfied!"',
            location: 'North Carolina',
        },

    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-semibold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;