import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import FAQ from './pages/FAQ/FAQ'
import QuemSomos from './pages/QuemSomos/QuemSome'
import Sobre from './pages/Sobre/Sobre'
import Layout from './components/Layout/Layout'

const App = () =>{
  return(
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/QuemSomos' element={<QuemSomos />}/>
          <Route path='/Sobre' element={<Sobre />}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
} 
export default App