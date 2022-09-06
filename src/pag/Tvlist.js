import React from "react";
import {useEffect, useState} from "react";
import axios from 'axios';
import MovieCard from "../compon/MovieCard";

function  Tvli() {

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const url = "https://api.themoviedb.org/3"
const [movies, setmovies] = useState( [])
const [searchkey, setsearchkey] = useState( "")

const [page , setpage] = useState(1);


const fetmov = async (searchkey) => {
const types = searchkey ? "/search/tv" : "/tv/popular"
 const {data: {results}} = await axios.get(`${url}${types}`, {
           params:{
            api_key: process.env.REACT_APP_MOVE_API,
            query: searchkey
           }
 })
  setmovies(results)
}

// const fetmov = async (searchkey) => {
//   const types = searchkey ? "/search" : "/discover"
//    const {data: {results}} = await axios.get(`${url}${types}/movie`, {
//              params:{
//               api_key: process.env.REACT_APP_MOVE_API,
//               query: searchkey
//              }
//    })
//     setmovies(results)
//   }



useEffect(() => {
  fetmov()
}, [])


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
  const types = "/tv/popular"
   const {data: {results}} = await axios.get(`${url}${types}`, {
             params:{
              page : page ,
              api_key: process.env.REACT_APP_MOVE_API,
              query: searchkey
             }
   })
    setmovies(results)
  }


  return (
    <>
    <div className="App">
   
    <header style={{top:7 , right:5 , left:"inherit"}}>
       <form onSubmit={searchmovie}>
       <input type="text" onChange={(e) =>{setsearchkey(e.target.value)}}/>
       <button type={"submit"}>search</button>
       </form>
    </header>

    <div className="cal">
      <h2>tv shows </h2>
      <div className="conta"> 
      { rendermovie() }
      </div>
    </div>
   {!searchkey ? (<button className="btt" onClick={morem}>load more</button>):(<></>)}
  </div>
</>
  );

}

export default Tvli;