import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <>
            <header className="bg-blue-600 text-white p-6">
                <h1 className="text-4xl font-bold mb-2">Tailwind</h1>
                <p className="text-lg">Trabalhando com tailwind</p>
                <nav className="mt-4 text-right pr-25">
                    <Link to="/" className=" hover:text-amber-300 mx-6 border-2 hover:border-amber-300 p-1">Home</Link>
                    <Link to="/Contato" className=" hover:text-amber-300 mx-6 border-2 hover:border-amber-300 p-1">Contato</Link>
                    <Link to="Sobre" className=" hover:text-amber-300 mx-6 border-2 hover:border-amber-300 p-1">Sobre</Link>
                </nav>
            </header>
        </>
    )
}
export default Header