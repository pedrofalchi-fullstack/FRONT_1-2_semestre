import { useState} from "react";

const Exemplo1 = () =>{

    const [cont, setCont] = useState(0);
    const [nome, setNome] = useState("Alguem");
    const [sumir, setSumir] = useState(true)
    const [nomeExibido, setNomeExibido] = useState("")
    const[cor,setCor] = useState("blue")
    const limite = 10;
    const gravarNome = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setNome(event.target.value)
    }
    
    const mudarCor = () =>{
        setCor("#f00")
    }
    const exibir = () =>{
        setNomeExibido(nome);
        setNome("");
    }

    const Sumir = () =>{
        setSumir(!sumir)
    }

    return(
        <>
            <h1>Hook - useState()</h1>
            <p>Valor: {cont}</p>
            <p>Nome: {nomeExibido}</p>
            
            <button onClick={ () =>{setCont(cont + 1)}} disabled={cont >= limite}>+</button>
            <button onClick={() => {setCont(cont - 1)}} disabled={cont <= 0}>-</button>
            <button onClick={() =>{setCont(0)}} disabled={cont == 0}>Zerar</button>
            <button onClick={() => {setNome("João")}}>Mudar</button>
            <button onClick={() => {setNome("alguem")}}>Reset nome</button>
           

            <form>
                <label>Nome</label>
                <input type="text" value={nome} onChange={gravarNome} />
                <input type="button" onClick={ exibir } value="Enviar" ></input>
            </form>
             <input type="button" value={sumir ? "Esconder" : "Exibir"} onClick={Sumir}></input>
            {sumir && <p>Hello World</p>}

            <input type="button" value="mudar cor" onClick={mudarCor} />
            <div style={{ width: "150px", height: "150px", backgroundColor: cor}}>
            </div>
        </>
    )
}
export default Exemplo1;