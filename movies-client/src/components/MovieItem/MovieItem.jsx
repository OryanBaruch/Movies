import React from "react";
import ButtonComp from "../DialogButton/ButtonComp";
import './movie.css'

//takes the prop of movie list and use it to show Poster and Title.

const MovieItem = ({ movie }) => {

  return (
    <div className='itemContainer'>
      <h1> {movie.Title}</h1>
       <ButtonComp classes='buttonComp' movie={movie} />
       <img className='img' src={movie.Poster} alt="posterForMovie" />
    </div>
  );
};

export default MovieItem;
