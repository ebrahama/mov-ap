import React from "react";
import{Link } from "react-router-dom"
import {useEffect, useState} from "react";
import axios from 'axios';
import MovieCard from "../compon/MovieCard";

function   Movieli() {

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const url = "https://api.themoviedb.org/3"
const [movies, setmovies] = useState( [])
const [searchkey, setsearchkey] = useState( "")

const [page , setpage] = useState(1);
const b = "47009c10eddb127f105f8aba2ad2688c"

const fetmov = async (searchkey) => {
  const types = searchkey ? "/search" : "/discover"
   const {data: {results}} = await axios.get(`${url}${types}/movie`, {
             params:{
              page : page ,
              api_key: b,
              query: searchkey
             }
   })
    setmovies(results)
  }
  
useEffect(() => {
  fetmov()
},[])

const rendermovie = () => (
   movies.map(movie => (
       <MovieCard
       key={movie.id}
       movie={movie}
       />
   ))
)

const searchmovie = (e) => {
  e.preventDefault() 
  fetmov(searchkey)
 }

 const morem = async () => {
  setpage(page + 1)
  const types = "/discover"
   const {data: {results}} = await axios.get(`${url}${types}/movie`, {
             params:{
              page : page ,
              api_key: b,
              query: searchkey
             }
   })
    setmovies(results)
  }

  return (
    <>
    <div className="App">

    <Link to="/"><img src="https://img.icons8.com/ios/35/FA5252/circled-left-2.png"/></Link>

    <header style={{top:7 , right:5 , left:"inherit"}}>
       <form onSubmit={searchmovie}>
       <input type="text" onChange={(e) =>{setsearchkey(e.target.value)}}/>
       <button type={"submit"}>search</button>
       </form>
    </header>

    <div className="cal">
      <h2>movies</h2>
      <div className="conta"> 
      { rendermovie() }
      </div>
      {!searchkey ? (<button  className="btt" onClick={morem}>load more</button>):(<></>)}
    </div>
  </div>
</>
  );

}

export default Movieli;