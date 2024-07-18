import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai.js";
import { API_OPTIONS } from "../utils/constants.js";
import { addGptSuggestedMovies } from "../utils/gtpSearchSlice.js";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchInput = useRef(null);
  const { currentLanguage } = useSelector((store) => store.config);

  // Search Movi In TMDB Api with the movie name
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await response.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(gptSearchInput.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the given query :" +
      "Hidni Indian Retro Movies" +
      ". Only give the name of 5 movies, comma seperated like the example result given ahead. Example Result: Don, Gadar, Golmaal, Koi mil Gaya, Krish";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
    }

    // string of gpt suggested movies
    const gptSuggestedMovies = gptResult.choices?.[0]?.message?.content;
    // array of movies which is splited
    const splitSuggestedMovies = gptSuggestedMovies.split(", ");

    // for each movi I will search TMDB API and It gives Promise to resolve
    // [Promise, Promise, Promise, Promise, Promise]
    const promiseArrayMoviesData = splitSuggestedMovies?.map((movie) =>
      searchMovieTMDB(movie)
    );

    const tmdbMoviesResults = await Promise.all(promiseArrayMoviesData);
    console.log(tmdbMoviesResults);

    // Store movies sugegsted by GPT Ai and after fetching them from TMDB Api Store in redux Store
    dispatch(
      addGptSuggestedMovies({
        gptSuggestedMoviesNames: splitSuggestedMovies,
        tmdbMoviesResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="searchInput w-1/2 grid grid-cols-12 p-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptSearchInput}
          type="text"
          className=" bg-gradient-to-r from-emerald-100 to-gray-200 outline-none border-none rounded-l-full p-4 text-sm md:text-lg md:p-6 col-span-9"
          placeholder={currentLanguage.data.getSearchPlaceholder}
        ></input>
        <button
          className="bg-gradient-to-r from-teal-500 to-stone-600 text-white outline-none border-none rounded-r-full text-base cursor-pointer md:text-lg col-span-3"
          onClick={handleGptSearch}
        >
          {currentLanguage.data.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
