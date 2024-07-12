import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, url } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetching data from TMDB api and Updating the store
  const dispatch = useDispatch();

  const {popularMovies} = useSelector((store) => store.movies)

  const getPopularMovies = async () => {
    const res = await fetch(url + "/movie/popular", API_OPTIONS);
    const json = await res.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
