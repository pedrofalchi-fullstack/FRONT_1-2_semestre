import { useEffect, useState } from "react"
 
 
const Page4 = () =>{
 
    const [largura, setLargura] = useState(window.innerWidth);
    const [altura, setAltura] = useState(window.innerHeight);
    
    useEffect(() =>{
        const atualizarLargura = () =>setLargura(window.innerWidth)
        const atualizarAltura = () =>setAltura(window.innerHeight)
        window.addEventListener('resize',atualizarLargura)
        window.addEventListener('resize',atualizarAltura)
        return() =>{
            window.removeEventListener('resize',atualizarLargura)
            window.removeEventListener('resize',atualizarAltura)
        }
    },[])
   
    return(
        <>
            <p>Lagura da janela : {largura} px</p>
            <p>Altura da janela : {altura} px</p>
        </>
    )
}
 
export default Page4