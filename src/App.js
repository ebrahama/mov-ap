import {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';
import MovieCard from "./compon/MovieCard";
import YouTube from "react-youtube";


function App() {

const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280"
const url = "https://api.themoviedb.org/3"

const [movies, setmovies] = useState( [])
const [selectmov, setselectmov] = useState( {})
const [searchkey, setsearchkey] = useState( "")
const [playtr, setplaytr] = useState(false)

const fetmov = async (searchkey) => {
const types = searchkey ? "/search" : "/discover"
//const types = "/movie/upcoming"
 const {data: {results}} = await axios.get(`${url}${types}/movie`, {
           params:{
            api_key: process.env.REACT_APP_MOVE_API,
            query: searchkey
           }
 })
  selfmo(results[0])
  setmovies(results)
}

const fmo = async (id) => {
   const {data} = await axios.get(`${url}/movie/${id}`, {
          params:{
            api_key: process.env.REACT_APP_MOVE_API,
            append_to_response: 'videos'
          }
   }) 
  return data
  }


  const selfmo = async (movie) => {
    setplaytr(false)
    const data = await fmo(movie.id)
    setselectmov(data)
   }

useEffect(() => {
  fetmov()
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

const searchmovie = (e) => {
  e.preventDefault() 
  fetmov(searchkey)
 }

const Rendtr = () =>{
  const tra = selectmov.videos.results.find(vid => vid.name === 'Official Trailer')
  const tr = tra ? tra.key : selectmov.videos.results[0].key
  return (
    <YouTube
    className="ytb"
    videoId={tr}
    />
       )
  }


  return (
    <div className="App">

    <header>
       <form onSubmit={searchmovie}>
       <input type="text" onChange={(e) =>{setsearchkey(e.target.value)}}/>
       <button type={"submit"}>search</button>
       </form>
    </header>

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
    

    </div>
  );

}

export default App;
