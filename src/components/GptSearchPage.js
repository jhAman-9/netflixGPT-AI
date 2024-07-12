import React from "react";
import { BG_LOGO } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_LOGO} alt="backgroundLogo" className="object-cover"/>
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
