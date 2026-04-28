import { useEffect, useState } from "react";

const Exemplo2 = () =>{

    const[cont,setCont] = useState(0);

    useEffect(()=>{
        document.title = `Você Clicou: ${ cont } vezes`
    }, [cont] );

    return(
        <>
            Página 2
            <h1>useEffect</h1>
            <p>Você Clicou: {cont}</p>

            <button onClick={() =>{setCont(cont + 1)}} >Click</button>
        </>
    )
}
export default Exemplo2;