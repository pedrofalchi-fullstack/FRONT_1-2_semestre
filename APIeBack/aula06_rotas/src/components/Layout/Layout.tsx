import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
            <header>
                <nav className='p-6'>
                    <li><Link to="/" className='mx-6' >Home</Link></li>
                    <li><Link to="/Sobre" className='mx-6' >Sobre</Link></li>
                    <li><Link to="/QuemSomos"  className='mx-6'>Quem somos</Link></li>
                    <li><Link to="/FAQ" className='mx-6' >FAQ</Link></li>
                </nav>
            </header>

            <Outlet />

            <footer>

            </footer>
        </>
    )
}
export default Layout