import React from "react";

    const MovieCard = ({movie ,selectmov}) =>{
    
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

    return(

        <div className="moviecard" onClick={() =>{selectmov(movie)}}>
    
         { movie.poster_path ? <img className="moviepost" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
         :<div className="noimg"></div>
        } 
        <h5 className="movietitle">{movie.title}</h5>
       </div>
    ) 
  }

 export default MovieCard;
