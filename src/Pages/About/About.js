import React from 'react';
import about from '../../assets/images/login.png'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={about} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold text-center font-serif">About Us</h1>
                    <p className="py-6 text-center text-justify font-serif">
                        Welcome to Doctors Portal!
                        We are thrilled to have you here on our platform, connecting doctors and patients in a seamless and efficient manner. Our mission is to revolutionize the way healthcare is accessed and delivered, making it easier for individuals to find the right medical professionals and receive the care they need.

                        At Doctors Portal, we understand the challenges and frustrations that often accompany the process of finding a doctor. With so many factors to consider - from specialization and availability to location and patient reviews - it can be overwhelming to navigate the vast healthcare landscape. That's where we come in.

                        Our website is designed with one goal in mind: to simplify the process of finding and booking appointments with trusted doctors. We have carefully curated a comprehensive database of highly skilled medical practitioners across various specialties, ensuring that you have access to a diverse range of healthcare providers.

                        Using our intuitive search function, you can effortlessly browse through profiles, read detailed information about each doctor's qualifications and areas of expertise, and even view patient testimonials. We believe that empowering patients with this level of transparency is essential to building trust and fostering strong doctor-patient relationships.

                        Booking an appointment has never been easier. Our streamlined booking system allows you to check doctors' availability in real-time and secure an appointment that fits your schedule, all with just a few clicks. No more long waits on hold or playing phone tag with receptionists - with Doctors Portal, you're in control of your healthcare journey.

                        We take your privacy and security seriously. Rest assured that all personal information shared on our platform is kept strictly confidential, adhering to the highest standards of data protection. We believe that your peace of mind is just as important as your physical well-being.

                        Thank you for choosing Doctors Portal. We look forward to being your trusted partner in your healthcare journey.</p>

                </div>
            </div>
        </div>
    );
};

export default About;