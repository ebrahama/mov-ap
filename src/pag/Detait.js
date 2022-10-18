import React from "react";
import{Link } from "react-router-dom"
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from "../compon/tvcard";
import YouTube from "react-youtube";

function   Detlit() {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
    const url = "https://api.themoviedb.org/3/tv/"
    const b = "?api_key=47009c10eddb127f105f8aba2ad2688c" 
    const { id: movieid } = useParams();

    const [movie, setmovie] = useState( [])
    const [simov, setsimov] = useState( [])


   const fetmo = async () => {
    const {data} = await axios.get(`${url}${movieid}${b}`)

   setmovie(data)
  }

   const fetsimo = async () => {
    const {data} = await axios.get(`${url}${movieid}/similar${b}`)

   setsimov(data.results)
  }

  useEffect(() => {
    fetmo()
    fetsimo()
    rendermovie()
  },[movieid])


 const rendermovie = () => (
  simov.map(movie => (
      <MovieCard
      key={movie.id}
      movie={movie}
      />      
  ))
)


console.log(movie)
  return (
    <div className="App">
     
    <Link  style={{position:"absolute" ,top:15,left:20 ,zIndex:9999}} to="/tv"><img src="https://img.icons8.com/ios/35/FA5252/circled-left-2.png"/></Link>

    <div> 

      <img className="hero" style={{backgroundImage:`url('${IMAGE_PATH}${movie.backdrop_path}')`}}></img>
      <div className="herocon">
              <h1 className="ti">{movie.title}</h1>
              {movie.overview ? <p className="ov">{movie.overview}</p> : null}
           <div className="jj">
             <p>{movie.release_date}</p>  
             <p>min: {movie.runtime}</p>
             <p>rate: {movie.vote_average}</p>
           </div>
         
          <div className="moviecard3">
      {movie.poster_path ? <img className="moviepost3" src={`${IMAGE_PATH}${movie.poster_path}`}></img>
      :<div className="noimg3"></div>
      } 
          </div>
           <h6>{movie.tagline}</h6>
      </div>
      
    </div>   


 <div className="cal">
      <h2>similar</h2>
      <div className="conta"> 
      { rendermovie() }
      </div>
    </div>

  </div>
  );

}

export default Detlit;