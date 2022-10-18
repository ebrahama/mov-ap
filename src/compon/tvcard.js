import React from "react";
import { Link } from 'react-router-dom';

    const tvCard = ({movie}) =>{
 console.log(movie)
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

        return(

       <div className="moviecard">
    
         { movie.poster_path ? <img className="moviepost" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
         :<div className="noimg"></div>
        } 
        <Link  to={`/sear/${movie.id} `}>  
        <h5  className="movietitle dn">{movie.name}</h5>
         </Link>
       </div>
       
    ) 
  }

 export default tvCard;