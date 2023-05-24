import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ShowUpdateToys = () => {
  const loadData = useLoaderData();
  console.log(loadData);
  const { Price, quantity, description, _id } = loadData;

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const Price = parseFloat(form.price.value);
    const description = form.description.value;
    const updateToy = {
      quantity,
      Price,
      description,
    };
    fetch(`https://toy-website-server-phi.vercel.app/myToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Toy Updated...",
            text: "Your Toy is Updated Bruhh...",
          });
        }
      });
  };
  return (
    <div>
      <div className="mx-auto">
        <div className="modal-box w-11/12 max-w-5xl  bg-slate-200">
          <h1 className="text-center text-3xl bg-gradient-to-r animate-text from-gray-800 via-violet-500 to-gray-800 bg-clip-text text-transparent font-bold">
            Update Toy Details..
          </h1>
          <form onSubmit={handleUpdateForm}>
            <div className="grid md:grid-cols-2 mt-8">
              <div>
                <div className=" w-full md:w-[95%] mb-4 px-4">
                  <label className="block text-lg font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    defaultValue={Price}
                    placeholder="Enter a Update Toy Price....."
                    name="price"
                    className="w-full py-3 px-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className=" w-full md:w-[95%] mb-4 px-4">
                  <label className="block text-lg font-medium mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    defaultValue={quantity}
                    placeholder="Enter a Update Toy Quantity....."
                    name="quantity"
                    required
                    className="w-full py-3 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <div className=" w-full md:w-[95%] mx-auto px-8 ">
                  <label className="block text-lg font-medium mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    defaultValue={description}
                    placeholder="Enter a Update Description...."
                    name="description"
                    className="w-full py-3 px-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-5 mt-5 cursor-pointer bg-green-500 py-3 text-lg font-medium rounded-lg text-white text-center mx-auto">
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShowUpdateToys;
