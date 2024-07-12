import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, url } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetching data from TMDB api and Updating the store
  const dispatch = useDispatch();
  const {nowPlayingMovies} = useSelector((store) => store.movies)

  const getNowPlayingMovies = async () => {
      const res = await fetch(url + "/movie/now_playing?page=1", API_OPTIONS);
      const json = await res.json();
      dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
 
export default useNowPlayingMovies;
