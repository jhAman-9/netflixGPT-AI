import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  // fetching nowPlaying Movies and updating the store
  useNowPlayingMovies();
  // fetching popular Movies and updating the store
  usePopularMovies();
  // fetching topRated Movies and Updating the store
  useTopRatedMovies();
  // fetching upComing Movies and Updating the store
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}

      {/*

      MainContainer
      - videoBackground
      - VideoTitle

      SecondryContainer
      - MovieList * n
      - cards * n
      
      */}
    </div>
  );
};

export default Browse;
