import{Routes,Route} from "react-router-dom"
import Home from "./pag/Home"
import Movlist from "./pag/Movlist";
import Tvlist from "./pag/Tvlist"
import './App.css';

function App(){
  

  return (
      <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/move" element={<Movlist/>}/>
    <Route path="/tv" element={<Tvlist/>}/>
    </Routes>
     </>
  )
}
export default App;
