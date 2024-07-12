import React from "react";
import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  // instead of storing trailer details in redux store, we can work with useState Hook by storing trailer key just
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key +
          "&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
