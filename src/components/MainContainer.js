import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const length = movies.length

  const moviOnBackground = movies[Math.floor(Math.random() * length) + 1];

  const movi = moviOnBackground;
  
  console.log(movi);
  
  return (
    <div>
      <VideoTitle title={movi?.original_title} overview={movi?.overview} />
      <VideoBackground movieId={movi?.id} />
    </div>
  );
};

export default MainContainer;
