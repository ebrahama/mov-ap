import React from "react";

const MovieCard = ({movie}) =>{
    console.log(movie)

    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return(
        <div className="moviecard">
           
            <img className="moviepost" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
            <h5 className="movietitle">{movie.title}</h5>

        </div>
    );

};

export default MovieCard;