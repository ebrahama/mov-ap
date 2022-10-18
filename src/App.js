import{Routes , Route } from "react-router-dom";
import Home from "./pag/Home";
import Movlist from "./pag/Movlist";
import Tvlist from "./pag/Tvlist";
import Detli from "./pag/Detai";
import Detlit from "./pag/Detait";
import './App.css';

function App(){
  return (
    <>
       <Routes>
       <Route path="/"   element={<Home/>} />
       <Route path="/move"  element={<Movlist/>} />
       <Route path="/tv" element={<Tvlist/>}/> 
       <Route path="/search/:id" element={<Detli/>}/> 
       <Route path="/sear/:id" element={<Detlit/>}/> 
       </Routes>
   </>
  )
}
export default App;
