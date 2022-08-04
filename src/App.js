import {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';
import MovieCard from "./compon/MovieCard";


function App() {

const api = "https://api.themoviedb.org/3/discover/movie?api_key=47009c10eddb127f105f8aba2ad2688c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const [movies, setmovies] = useState( [])

const fetmov = async () => {
  const {data: {results}} = await axios.get(`${api}`, {}) 
  setmovies(results)
}



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


  return (
    <div className="App">

    <h2>hol</h2>

      <div className="conta">
      { rendermovie() }
      </div>


    </div>
  );



}

export default App;
