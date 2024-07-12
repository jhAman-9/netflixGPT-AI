import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS, url } from '../utils/constants';

const useMovieVideo = (movieId) => {
  // const [trailerID, setTrailerID] = useState(null)

  const {trailerVideo} = useSelector((store) => store.movies)

  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      url + `/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // extract trailers from all video clip array
    const trailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    // setTrailerID(trailer.key);

    // instead of state variable storing trailer video details into redux movie store slice
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
}

export default useMovieVideo