import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
