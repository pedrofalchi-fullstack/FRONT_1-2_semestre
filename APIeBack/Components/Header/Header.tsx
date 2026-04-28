import { Link } from "react-router-dom";

const Header = () =>{

  return(
    <>
        <header className="bg-blue-700 text-white shadow-white shadow-md">
            <div className="max-w-7x1 mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
                <Link to="/" className="hover:text-blue-200 transition duration-200 border-transparent">
                    <h1 className="text-2x1 font-bold tracking-wide mb-2 md:mb-0">Aluno Web</h1>
                </Link>

                <nav className="flex space-x-6 text-sm font-medium">
                    <Link to="/listar" className="hover:text-blue-200 transition duration-200 border-transparent">Listar Aluno</Link>
                    <Link to="/cadastrar" className="hover:text-blue-200 transition duration-200 border-transparent">Cadastrar Aluno</Link>
                </nav>

            </div>

        </header>
    </>
  )
}
export default Header;