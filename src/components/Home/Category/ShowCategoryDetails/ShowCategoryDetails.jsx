import React from "react";
import { useLoaderData } from "react-router-dom";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";

const ShowCategoryDetails = ({ children }) => {
  const loadData = useLoaderData();
  console.log(loadData);
  const {
    sellerName,
    title,
    category,
    quantity,
    Price,
    toyPhotoUrl,
    _id,
    Rating,
    description,
  } = loadData;
  return (
    <div>
      <div>
        <CommonBanner text={"Toys Details Here..."}></CommonBanner>
        {children}
      </div>
      <div className="px-20 py-10">
        <div className="card card-side bg-gray-200 shadow-xl px-14 py-14 ">
          <figure>
            <img
              className="rounded-lg h-[350px] w-full"
              src={toyPhotoUrl}
              alt="Movie"
            />
          </figure>
          <div className="card-body ml-52">
            <h2 className="card-title">Toy Name: {title}</h2>
            <h2 className="card-title">Category: {category}</h2>
            <h2 className="card-title"> Quantity: {quantity}</h2>
            <h2 className="card-title"> Seller name: {sellerName}</h2>
            <p>Price: ${Price}</p>
            <p>Rating: {Rating}+</p>
            <p>Description : {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryDetails;
