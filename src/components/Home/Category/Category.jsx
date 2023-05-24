import React, { useEffect, useState } from "react";
import ShowCategory from "./ShowCategory";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("dfs");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`https://toy-website-server-phi.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-up"
        className="text-center bg-gradient-to-r animate-text from-gray-900 via-gray-700 to-violet-400 bg-clip-text text-transparent mt-8 font-bold text-2xl md:text-4xl px-20"
      >
        Educational and Learning Toys
      </h1>
      <div className="flex justify-center items-center">
        <span className="text-xl text-center mx-auto border-gray-500  bg-gradient-to-r animate-text from-gray-600 via-indigo-400 to-violet-400 bg-clip-text text-transparent font-semibold mt-4 border-[3px] px-3 py-2 rounded-lg">
          {" "}
          Sub-Category
        </span>
      </div>

      <div className="">
        <div className="tab-container text-center mt-8">
          <div className="text-center w-full m-auto">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="tabs flex justify-center items-center"
            >
              <div
                onClick={() => handleTabClick("sciencekit")}
                className={`tab text-md font-semibold tab2 ${
                  activeTab == "sciencekit"
                    ? " rounded-md text-white bg-violet-600 "
                    : ""
                }`}
              >
                Science Toy
              </div>
              <div
                onClick={() => handleTabClick("engineerkit")}
                className={`tab text-md font-semibold tab2  ${
                  activeTab == "engineerkit"
                    ? "rounded-md text-white bg-violet-600  "
                    : ""
                }`}
              >
                Engineering Toys
              </div>
              <div
                onClick={() => handleTabClick("mathkit")}
                className={`tab text-md font-semibold tab2  ${
                  activeTab == "mathkit"
                    ? " rounded-md text-white  bg-violet-600 "
                    : ""
                }`}
              >
                Math Toys
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="grid md:grid-cols-3 sm:grid-cols-2 mx-auto lg:grid-cols-3 grid-cols-1 gap-5 px-4 md:px-20 py-10"
      >
        {toys.map((toy) => (
          <ShowCategory toy={toy}></ShowCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
