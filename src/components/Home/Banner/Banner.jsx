import React, { useEffect } from "react";
import "../Banner/Banner.css";
import bannerImg from "../../../assets/images/child.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div>
      <div className="bg-banner">
        <div className="grid md:grid-cols-2 md:px-32 px-8 py-8 md:pt-32 md:gap-36">
          <div className="sm:text-center md:text-left text-center">
            <h1
              data-aos="fade-up"
              className="md:text-[50px] md:leading-[55px] text-[33px] leading-10 font-extrabold animate-text bg-gradient-to-r from-teal-400 via-purple-200 to-orange-400  text-5xl  bg-clip-text text-transparent"
            >
              A Joyous journey into the World of Toys... Enchanted Toy
              Emporium...!
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mt-6  from-white to-gray-400 bg-gradient-to-r bg-clip-text animate-text text-transparent text-xs font-bold leading-4"
            >
              Welcome to ToyJoy Venture, the ultimate online toy marketplace
              where dreams come to life! Discover a magical world of endless joy
              and excitement as you embark on a journey through our vast
              collection of toys for children of all ages. Whether you're a
              parent, a toy enthusiast.....
            </p>
            <button className="flex mt-8 justify-center items-center rounded-xl bg-gradient-to-br from-[#6025F5] to-[#f753cbb9] md:px-4 md:py-4 px-3 py-3 mb-4 sm:mx-auto md:mx-0 mx-auto text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              <h1>Explore More </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
          <div data-aos="fade-up">
            <img
              className="md:w-[430px] md:h-[430px] border-white border-4 rounded-full"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
