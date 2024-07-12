import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const { suggestedGptMovies, tmdbMoviesResults } = useSelector(
    (store) => store.gptSearch
  );

  if (!suggestedGptMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {suggestedGptMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMoviesResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
