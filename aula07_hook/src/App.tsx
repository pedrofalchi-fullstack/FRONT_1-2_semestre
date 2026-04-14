import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Exemplo1 from "./pages/Exemplo1/Exemplo1";
import Exemplo2 from "./pages/Exemplo2/Exemplo2";
import Page3 from "./pages/Exemplo3/Page3";
import Page4 from "./pages/Exemplo4/page4";
import Page5 from "./pages/Page5/Page5";
import Page6 from "./pages/Exemplo6/page6";


const App = () =>{
  return(
    <>
      <BrowserRouter>
        <nav>
            <ul className="">
              <Link to="exemplo1">ex1</Link>
              <Link to="exemplo2">ex2</Link>
              <Link to="exemplo3">ex3</Link>
              <Link to="exemplo4">ex4</Link>
              <Link to="exemplo5">ex5</Link>
              <Link to="exemplo6">ex6</Link>
            </ul>
        </nav>

        <Routes>
          <Route path="exemplo1" element={<Exemplo1/>}/>
          <Route path="exemplo2" element={<Exemplo2/>}/>
          <Route path="exemplo3" element={<Page3/>}/>
          <Route path="exemplo4" element={<Page4/>}/>
          <Route path="exemplo5" element={<Page5/>}/>
          <Route path="exemplo6" element={<Page6/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;