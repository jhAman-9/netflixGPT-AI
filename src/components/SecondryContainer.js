import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-2 z-20 relative">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Similar"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
      </div>

      {/* MovieList - Popular
            MovieCards * n
        MovieList - Similar
            MovieCards * n
        MovieList - Trending
            MovieCards * n
        MovieList - Action=
            MovieCards * n */}
    </div>
  );
}

export default SecondryContainer