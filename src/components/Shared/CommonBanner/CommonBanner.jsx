import React from "react";
import "../CommonBanner/BannerCM.css";

const CommonBanner = ({ text }) => {
  return (
    <div className="cm-banner justify-center items-center flex">
      <div className="overlay"></div>

      <h2 className="font-bold text-4xl md:text-6xl bg-gradient-to-r animate-text from-gray-100 via-orange-300 to-green-100 bg-clip-text text-transparent">
        {text}
      </h2>
    </div>
  );
};

export default CommonBanner;
