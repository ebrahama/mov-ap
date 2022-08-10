import React from "react";

  const Move = ({movie ,selectmov}) =>{
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300"

    return(
    
        <div className="moviecar" onClick={() =>{selectmov(movie)}}>
         { movie.poster_path ? <img className="moviepos" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
         :<div className="noim"></div>
        } 
       </div>
    )

}

export default Move;