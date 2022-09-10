import React from "react";
import {useEffect, useState} from "react";
import{Link } from "react-router-dom"
import axios from 'axios';
import MovieCard from "../compon/MovieCard";
import More from "../compon/More";
import Mori from "../compon/Mori";
import lod from "../compon/1490.gif";
import YouTube from "react-youtube";

function Home() {

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const url = "https://api.themoviedb.org/3"

const [movies, setmovies] = useState( [])
const [movie, setmovie] = useState( [])
const [movi, setmovi] = useState( [])

const [selectmov, setselectmov] = useState( {})
const [searchkey, setsearchkey] = useState( "")
const [playtr, setplaytr] = useState(false)

const [load, setload] = useState(false)
useEffect(() => {
  setload(true)
  setTimeout(()=> {
    setload(false)
  }, 3000)
}, [])

 const b = "47009c10eddb127f105f8aba2ad2688c"


const fetmov = async (searchkey) => {
const types = searchkey ? "/search" : "/discover"
//const types = "/movie/upcoming"
 const {data: {results}} = await axios.get(`${url}${types}/movie`, {
           params:{
            api_key: b,
            query: searchkey
           }
 })
  selfmo(results[0])
  setmovies(results)
}

const fetmo = async () => {
    const types = "/movie/top_rated"
    const {data: {results}} = await axios.get(`${url}${types}`, {
             params:{
              api_key: b,
             }
   })
   setmovie(results) 
  }

const fetm = async () => {
  const types = "/tv/popular"
   // const types = "/movie/top_rated"

    const {data: {results}} = await axios.get(`${url}${types}`, {
              params:{
              api_key: b,
              }
    })
    setmovi(results)
  }

const fmo = async (id) => {
   const {data} = await axios.get(`${url}/movie/${id}`, {
          params:{
            api_key: b,
            append_to_response: 'videos'
          }
   }) 
  return data
  }


  const selfmo = async (movie) => {
    setplaytr(false)
    const data = await fmo(movie.id)
    setselectmov(data)
    scro()
   }

const scro = ()=> {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

useEffect(() => {
  fetmov()
  fetmo()
  fetm()
}, [])


const rendermovie = () => (
   movies.map(movie => (
       <MovieCard
       key={movie.id}
       movie={movie}
       selectmov={selfmo}
       />
   ))
)

const rendermovi = () => (
  movie.map(movie => (
      <More
      key={movie.id}
      movie={movie}
      selectmov={selfmo}
      />
  ))
)

const rendermovib = () => (
  movi.map(movie => (
      <Mori
      key={movie.id}
      movie={movie}
      selectmov={selfmo}
      />
  ))
)


const searchmovie = (e) => {
  // e.preventDefault() 
  // fetmov(searchkey)
 }

const Rendtr = () =>{
  const tra = selectmov.videos.results.find(vid => vid.name === 'Official Trailer')
  const tr = tra ? tra.key : selectmov.videos.results[0].key
  return (
    <YouTube
    className="ytb"
    videoId={tr}
    opts={{
      width:"400px",
      height:"300px"
    }}
    />
       )
  }
console.log(selectmov.backdrop_path)
  return (
    <>
    <div className="App">
    {load ? <div className="loda"><img src={lod} alt="loading..." /></div> 
     : null}
    
    {/* <header>
       <form onSubmit={searchmovie}>
       <input type="text" onChange={(e) =>{setsearchkey(e.target.value)}}/>
       <button type={"submit"}>search</button>
       </form>
    </header> */}
 
   <div style={{position:"absolute" ,top:15,left:20 ,zIndex:9999}}>
    <Link className="boo" to="/">HOME</Link>
    <Link className="bom" to="/move">MOVIE</Link>
    <Link className="bom" to="/tv">TV</Link>
   </div>
   
    <div> 
      <img className="hero" style={{backgroundImage:`url('${IMAGE_PATH}${selectmov.backdrop_path}')`}}></img>
      <div className="herocon">
            {selectmov.videos && playtr ? Rendtr() : null }
              <h1 className="ti">{selectmov.title}</h1>
              {selectmov.overview ? <p className="ov">{selectmov.overview}</p> : null}
           <div className="jj">
             <p>{selectmov.release_date}</p>  
             <p>min: {selectmov.runtime}</p>
           </div>
            
             <button className="wn">watch now</button>
             <button className="tr" onClick={() => setplaytr(true)}>trailer</button> 
        
          <div className="moviecard3">
      {selectmov.poster_path ? <img className="moviepost3" src={`${IMAGE_PATH}${selectmov.poster_path}`}></img>
      :<div className="noimg3"></div>
      } 
          </div>
      </div>
    </div>

     <div className="cal">
      <h2>Popular</h2>
      <div className="conta"> 
      { rendermovie() }
      </div>
    </div> 

      <div className="b">
      <h2>Top rated movies</h2>
      <div className="contab"> 
      { rendermovi() }
      </div> 
       </div>
  
       <div className="b">
       <h2>tv popular</h2>
      <div className="contab"> 
      { rendermovib() }
      </div> 
       </div>
  </div>
</>
  );

}

export default Home;
