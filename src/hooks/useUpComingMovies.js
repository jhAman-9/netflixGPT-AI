import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, url } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  // Fetching data from TMDB api and Updating the store
  const dispatch = useDispatch();
  const {upComingMovies} = useSelector((store) => store.movies)

  const getUpComingMovies = async () => {
    const res = await fetch(url + "/movie/upcoming", API_OPTIONS);
    const json = await res.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
   !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
