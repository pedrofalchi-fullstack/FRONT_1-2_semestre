import { useEffect} from "react"

function gerarCor() : string{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6,"0")}`;
}
 
const Page5 = () =>{

    const mudarCor = () =>{
        document.body.style.backgroundColor = gerarCor();
    }
    useEffect(() =>{
        const corAnterior = document.body.style.backgroundColor 
        const interval = setInterval(() =>{
            mudarCor()
        },3000);
        return() =>{
            clearInterval(interval);
            document.body.style.backgroundColor = corAnterior;
        }
    },[])

    return(
        <>
            
        </>
    )
}
 
export default Page5