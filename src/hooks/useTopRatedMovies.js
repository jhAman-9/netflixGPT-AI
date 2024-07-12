import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, url } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // Fetching data from TMDB api and Updating the store
  const dispatch = useDispatch();

  const {topRatedMovies} = useSelector((store) => store.movies)

  const getTopRatedMovies = async () => {
    const res = await fetch(url + "/movie/top_rated", API_OPTIONS);
    const json = await res.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
