import React, { useContext, useEffect, useState } from "react";
import CommonBanner from "../../Shared/CommonBanner/CommonBanner";
import { AuthContext } from "../../../Provider/AuthProvider";
import ShowMyToys from "./ShowMyToys";
import Swal from "sweetalert2";
import useTitle from "../../Shared/useTitle/useTitle";

const MyToys = ({ children }) => {
  useTitle("MyToys");
  const { users } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://toy-website-server-phi.vercel.app/myToys/seller/${users?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [users]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-website-server-phi.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <CommonBanner text={"My Toys...."}></CommonBanner>
        {children}
      </div>

      <div className="overflow-x-auto  overflow-hidden rounded-lg border border-gray-300 shadow-lg md:m-6">
        <table className="table w-full  border-collapse text-left text-sm text-gray-600">
          {/* head */}
          <thead className="">
            <tr>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                Seller Name :
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                Toy Name :
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                Sub-Category
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                Quantity{" "}
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                Price
              </th>
              <th
                scope="col"
                className=" px-2 md:px-16 py-4 text-[14px] font-semibold text-gray-900"
              >
                {" "}
                Update & Delete{" "}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {myToys.map((toy) => (
              <ShowMyToys
                toy={toy}
                handleDelete={handleDelete}
                key={toy._id}
              ></ShowMyToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
