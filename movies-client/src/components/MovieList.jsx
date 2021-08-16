import React from "react";
import MovieItem from "./MovieItem/MovieItem";
import '../components/MovieItem/movie.css'

//Fetch the list of the movies, props for each movie item

const MovieList = ({ movie }) => {
  return (
    <div className='movieListContainer'>
      <MovieItem movie={movie} />
    </div>
  );
};

export default MovieList;
