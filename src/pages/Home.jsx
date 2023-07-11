import React from "react";
import Navbar from "../componenets/Navbar";
import Hero from "../componenets/Hero";
import BookCar from "../componenets/BookCar";
import PlanTrip from "../componenets/PlanTrip";
import PickCar from "../componenets/PickCar";
import Banner from "../componenets/Banner";
import ChooseUs from "../componenets/ChooseUs";
import Testimonials from "../componenets/Testimonials";
import Faq from "../componenets/Faq";
import Download from "../componenets/download/Download";
import Footer from "../componenets/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <BookCar/>
      <PlanTrip/>
      <PickCar/>
      <Banner/>
      <ChooseUs/>
      <Testimonials/>
      <Faq/>
      <Download/>
      <Footer/>
    </>
  );
};

export default Home;
