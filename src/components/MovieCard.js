import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 rounded-lg mr-1">
      <img src={IMG_CDN_URL + posterPath} alt="moviesPoster" />
    </div>
  );
};

export default MovieCard;
