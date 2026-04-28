import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <>
            <footer className="bg-gray-900 text-white text-center p-6">
                <p className="text-lg">&copy; 2026 - Todos os direitos reservador</p>
                <nav className="mt-4">
                    <Link to="/" className="text-blue-400 hover:text-amber-300 mx-2">Home</Link>
                    <Link to="/Contato" className="text-blue-400 hover:text-amber-300 mx-2">Contato</Link>
                    <Link to="/Sobre" className="text-blue-400 hover:text-amber-300 mx-2">Sobre</Link>
                </nav>
            </footer>
        </>
    )
}
export default Footer