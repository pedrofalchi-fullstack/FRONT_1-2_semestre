const Footer = () =>{

  return(
    <>
        <footer className="bg-blue-800 text-gray text-center py-6 mt-12 border-t border-blue-700">
            <div className="max-w-7x1 mx-auto px-4">
                <p className="text-sm md:text-base font">{ new Date().getFullYear() }AlunoWEB. Todos os direitos resrvados.</p>
            </div>
        </footer>   
    </>
  )
}
export default Footer;