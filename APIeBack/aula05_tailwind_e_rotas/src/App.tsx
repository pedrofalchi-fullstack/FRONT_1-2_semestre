import "./App.css"
import Home from "./pages/Home/Home.tsx"
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Sobre from "./pages/Sobre/Sobre.tsx"
import Contato from "./pages/Contato/Contato.tsx"
import Layout from "./components/Layout/Layout.tsx"
import Produto from "./pages/Produto/Produto.tsx"


const App = () =>{
  return(
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Layout/>} > 
              <Route index element={<Home/>} /> 
              <Route path="/Sobre" element={<Sobre/>} /> 
              <Route path="/Contato" element={<Contato/>} />
              <Route path="/produto/:id" element={<Produto/>} /> 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
} 
export default App