import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import SecondBanner from "./SecondBanner/SecondBanner";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import Form from "./Form/Form";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <SecondBanner></SecondBanner>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Form></Form>
    </div>
  );
};

export default Home;
