import React from "react";

import { Link } from "react-router-dom";

const ShowMyToys = ({ toy, handleDelete }) => {
  const { sellerName, title, category, quantity, Price, _id } = toy;

  return (
    <tr className=" text-[15px] font-medium ">
      <td className="md:pl-20 pl-2">{sellerName}</td>
      <td className="md:pl-20 pl-2">{title}</td>
      <td className="md:pl-20 pl-2">{category}</td>
      <td className="md:pl-20 pl-2">{quantity}</td>
      <td className="md:pl-20 pl-2">${Price}</td>
      <td className="md:pl-14 pl-2">
        <Link
          to={`/showToy/${_id}`}
          className="px-3 cursor-pointer bg-green-500 text-slate-50 rounded-md font-bold py-2"
        >
          Update
        </Link>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="px-3 ml-2 bg-red-600 text-slate-50 rounded-md font-bold py-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowMyToys;
