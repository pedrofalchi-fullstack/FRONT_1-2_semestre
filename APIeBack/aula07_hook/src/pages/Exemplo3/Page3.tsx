import { useEffect, useState } from "react"
 
 
const Page3 = () =>{
 
    const frases = [
        "Frase 01: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa adipisci debitis aspernatur. Consequatur esse commodi ipsam a illo modi amet vero, dolores sint voluptas repudiandae delectus placeat iusto beatae!",
        "Frase 02: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa adipisci debitis aspernatur. Consequatur esse commodi ipsam a illo modi amet vero, dolores sint voluptas repudiandae delectus placeat iusto beatae!",
        "Frase 03: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa adipisci debitis aspernatur. Consequatur esse commodi ipsam a illo modi amet vero, dolores sint voluptas repudiandae delectus placeat iusto beatae!",
        "Frase 04: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa adipisci debitis aspernatur. Consequatur esse commodi ipsam a illo modi amet vero, dolores sint voluptas repudiandae delectus placeat iusto beatae!",
    ]
 
    const[ indice,setIndice ] = useState(0);
 
    const [exibidas,setExibidas] = useState<string[]>([])
 
    useEffect(()=>{
 
        const intervalo = setInterval(()=>{
            setExibidas((anteriores) =>{
                const novaFrase = frases[indice];
                return[...anteriores,novaFrase]
            })
            setIndice((indiceAtual) => (indiceAtual + 1) % frases.length)
        },3000);    
        return() => clearInterval(intervalo);
    },[ indice ]);
   
    return(
        <>
            <h1>UseEffect</h1>
            <h2>Exemplo: Mostra de Mensagens</h2>
           
            { exibidas.map((frase,i) =>(
                <p key={i}>{ frase}</p>
            ))}
 
        </>
    )
}
 
export default Page3