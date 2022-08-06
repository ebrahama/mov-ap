import {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';
import MovieCard from "./compon/MovieCard";
import YouTube from "react-youtube";


function App() {

const IMAGE_PATH = "https://image.tmdb.org/t/p/w780"

const url = "https://api.themoviedb.org/3"
//const api = "?api_key=47009c10eddb127f105f8aba2ad2688c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const [movies, setmovies] = useState( [])
const [selectmov, setselectmov] = useState( {})
const [searchkey, setsearchkey] = useState( "")


const fetmov = async (searchkey) => {
const types = searchkey ? "/search" : "/discover"
//const types = "/movie/upcoming" ${api}
 const {data: {results}} = await axios.get(`${url}${types}/movie`, {
           params:{
            api_key: process.env.REACT_APP_MOVE_API,
            query: searchkey
           }
 }) 
 setselectmov(results[0])
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
    const data = await fmo(movie.id)
    console.log('movie data',data);
    setselectmov(movie)
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




  return (
    <div className="App">

    <header>
       <span>movies</span>
       <form onSubmit={searchmovie}>

       <input type="text" onChange={(e) =>{setsearchkey(e.target.value)}}/>
     
       <button type={"submit"}>search</button>

       </form>
       
    </header>

    <div className="hero" style={{backgroundImage:`url('${IMAGE_PATH}${selectmov.backdrop_path}')`}}>
      <div className="herocon">

          <YouTube
          
          />
             <button>play trailer</button>
              <h1>{selectmov.title}</h1>
              {selectmov.overview ? <p>{selectmov.overview}</p> : null}
      </div>
    </div>


      <div className="conta">
      { rendermovie() }
      </div>

    </div>
  );



}

export default App;
