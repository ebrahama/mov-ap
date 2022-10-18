import React from "react";
import { Link } from 'react-router-dom';

    const MovieCard1 = ({movie}) =>{

    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

        return(

       <div className="moviecard">
      
         { movie.poster_path ? <img className="moviepost" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
         :<div className="noimg"></div>
        } 
       
       <Link  to={`/search/${movie.id} `}> 
        <h5  className="movietitle dn">{movie.title}</h5>
         </Link>
       </div>
       
    ) 
  }

 export default MovieCard1;
