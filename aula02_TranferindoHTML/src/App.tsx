import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import Home from './pages/Home/Home.tsx'

import '../public/css/fonts.css' 
import '../public/css/stylesGENERAL.css' 
import '../public/css/stylesLG.css' 
import '../public/css/stylesMD.css' 
import '../public/css/stylesSM.css'
import '../public/css/stylesXL.css' 
import '../public/css/stylesXS.css' 

const App = () => {
    return(
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App