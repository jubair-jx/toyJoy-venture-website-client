import React, { useContext, useEffect, useState } from "react";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Shared/useTitle/useTitle";

const AddToy = ({ children }) => {
  useTitle("Add Toy");
  const { users } = useContext(AuthContext);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.toyName.value;
    const sellerName = form.sellerName.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const sellerEmail = form.email.value;
    const Rating = form.rating.value;
    const Price = parseFloat(form.price.value);
    const description = form.description.value;
    const toyPhotoUrl = form.photoUrl.value;

    const addToy = {
      title,
      sellerName,
      category,
      quantity,
      sellerEmail,
      Rating,
      Price,
      description,
      toyPhotoUrl,
    };

    fetch("https://toy-website-server-phi.vercel.app/postToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Toy Added...",
            text: "Your Toy is Added Bruhh...",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <CommonBanner text={"You Can Add Toy..."}></CommonBanner>
        {children}
      </div>
      <div className="rounded-md bg-slate-300 md:mx-40 mx-4 my-3 md:my-5 h-[1080px]  md:h-[800px] ">
        <div className="text-center">
          <h1 className="text-center font-bold text-5xl bg-gradient-to-r animate-text from-gray-800 via-violet-500 to-gray-800 bg-clip-text text-transparent  pt-5">
            Add a Toy
          </h1>
          <p className="mt-5 md:w-[650px] text-sm mx-auto ">
            Welcome to ToyJoy Venture, the ultimate online toy marketplace where
            dreams come to life! Discover a magical world of endless joy and
            excitement as you embark on a journey through our vast collection of
            toys for children of all ages.
          </p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className=" grid md:grid-cols-2 ">
            <div className="mt-8 md:ml-20">
              <div className=" mb-4 w-full md:w-9/12 px-4">
                <label className="block font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter a Toy Name"
                  name="toyName"
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Seller Name</label>
                <input
                  type="text"
                  placeholder="Enter a Seller Name"
                  name="sellerName"
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Sub-Category</label>
                <input
                  type="text"
                  placeholder="Enter a Sub-Category Name"
                  name="category"
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Quantity</label>
                <input
                  type="number"
                  placeholder="Enter a Toy Quantity"
                  name="quantity"
                  required
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="md:mt-8 md:ml-20">
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Seller E-mail</label>
                <input
                  placeholder="Enter a Seller E-mail"
                  name="email"
                  type="email"
                  required
                  defaultValue={users.email}
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Rating</label>
                <input
                  type="number"
                  placeholder="Enter a Toy Rating"
                  name="rating"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Price</label>
                <input
                  type="number"
                  placeholder="Enter a Toy Price"
                  name="price"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[70%] mx-auto px-8 ">
            <label className="block font-medium mb-2">Description</label>
            <input
              type="text"
              placeholder="Enter a Description...."
              name="description"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className=" w-full md:w-[70%] mx-auto px-8 ">
            <label className="block font-medium mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photoUrl"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-[70%] mx-auto px-8 py-2">
            <button className="w-full bg-violet-600 border border-[#724f48] text-white font-bold py-2 px-4 rounded">
              Add Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
