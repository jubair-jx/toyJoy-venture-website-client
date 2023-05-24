import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ShowCategory = ({ toy }) => {
  const {
    sellerName,
    title,
    category,
    quantity,
    Price,
    toyPhotoUrl,
    _id,
    Rating,
  } = toy;
  console.log(toy);
  return (
    <div data-aos="fade-up">
      <div className="card mx-auto w-80 sm:w-80 animate-text bg-gradient-to-r from-gray-200 via-gray-200 to-violet-100 text-transparent md:w-96 h-[420px] rounded-lg px-3 py-3  shadow-xl">
        <figure>
          <img src={toyPhotoUrl} alt="Shoes" />
        </figure>
        <div className="card-body text-gray-600">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-500">Price : ${Price}</p>
          <p className="text-gray-500">Rating : {Rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/showDetail/${_id}`} className="bg-violet-700 btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
