import Main from "./Main";
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Sala1 from './pages/Sala1'
import Sala2 from './pages/Sala2'
import Sala3 from './pages/Sala3'
import Sala4 from './pages/Sala4'
import Sala5 from './pages/Sala5'
import ScrollToTop from './hooks/ScrollToTop';
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { change } from "./features/counter/idiomaSlice";

function App() {

  const idioma = localStorage.getItem('idioma')
  const dispatch = useDispatch()

  useEffect(()=>{
    if(idioma) {dispatch(change(idioma))}
  },[])
  
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Sala1" element={<Sala1/>}/>
          <Route path="/Sala2" element={<Sala2/>}/>
          <Route path="/Sala3" element={<Sala3/>}/>
          <Route path="/Sala4" element={<Sala4/>}/>
          <Route path="/Sala5" element={<Sala5/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
