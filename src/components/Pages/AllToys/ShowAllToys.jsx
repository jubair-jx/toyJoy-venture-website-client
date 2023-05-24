import React from "react";
import { Link } from "react-router-dom";

const ShowAllToys = ({ toy, index }) => {
  const { sellerName, title, category, quantity, Price, _id } = toy;
  return (
    <tr className="">
      <td className="md:pl-8 pl-2">{index + 1}</td>
      <td className="md:pl-20 pl-2">{sellerName}</td>
      <td className="md:pl-20 pl-2">{title}</td>
      <td className="md:pl-20 pl-2">{category}</td>
      <td className="md:pl-20 pl-2">${Price}</td>
      <td className="md:pl-20 pl-2">{quantity}</td>
      <td className="md:pl-14 pl-2">
        <Link
          to={`/showDetail/${_id}`}
          className="px-4 bg-orange-400 text-slate-50 rounded-md font-bold py-2"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default ShowAllToys;
