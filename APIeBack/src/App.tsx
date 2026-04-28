import "./App.css";
import Header from "../Components/Header/Header"
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () =>{

  return(
    <>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    
    </>
  )
}
export default App;