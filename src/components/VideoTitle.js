import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[10%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl p-4 px-12 rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-700 mx-2 text-white text-xl p-4 px-12 rounded-md hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
