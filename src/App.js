import{Routes , Route ,Link } from "react-router-dom"
import Home from "./pag/Home"
import Movlist from "./pag/Movlist";
import Tvlist from "./pag/Tvlist"
import './App.css';

function App(){
  return (
    <>
   <nav style={{position:"absolute" ,top:15,left:20 ,zIndex:999}}>
    <ul style={{display:"flex" ,listStyle:"none"}}>
      <li className="bom"><Link to="/">home</Link></li>
      <li className="bom"><Link to="/move">movie</Link></li>
      <li className="bom"><Link to="/tv">tv</Link></li>
    </ul>
   </nav>
       <Routes>
       <Route path="/"   element={<Home/>} />
       <Route path="/move"  element={<Movlist/>} />
       <Route path="/tv" element={<Tvlist/>}/> 
       </Routes>
   </>
  )
}
export default App;
