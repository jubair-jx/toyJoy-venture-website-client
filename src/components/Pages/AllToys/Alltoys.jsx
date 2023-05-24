import React, { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import useTitle from "../../Shared/useTitle/useTitle";

const Alltoys = ({ children }) => {
  useTitle("All TOys");
  const [search, setSearch] = useState("");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-website-server-phi.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://toy-website-server-phi.vercel.app/toySearch/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div>
      <div>
        <CommonBanner text={"All Toys Here..."}></CommonBanner>
        {children}
      </div>

      <form className="mt-4 px-8 mb-2 md:px-60">
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-800 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 pl-10 text-md text-black border placeholder:text-gray-500 border-gray-300 rounded-lg   dark:bg-gray-200 dark:border-gray-600 "
            placeholder="Search Your Favorite Toys....."
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="text-white absolute right-2.5 bottom-2.5 bg-violet-500 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="overflow-x-auto  overflow-hidden rounded-lg border border-gray-200 shadow-md md:m-6">
        <table className="table w-full  border-collapse bg-white text-left text-sm text-gray-500">
          {/* head */}
          <thead className=" ">
            <tr>
              <th
                scope="col"
                className=" px-2 md:px-4 py-4 font-medium text-gray-900"
              >
                Sl No :
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                Seller Name :
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                Toy Name :
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                Sub-Category
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                Price
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                Quantity
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 font-medium text-gray-900"
              >
                View Details
              </th>
            </tr>
          </thead>
          <tbody className="">
            {toys.map((toy, index) => (
              <ShowAllToys key={toy._id} index={index} toy={toy}></ShowAllToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
