import { useEffect, useState, type FormEvent} from "react"

 
const Page6 = () =>{

    const [senha,setSenha] = useState("");
    const [usuario,setUsuario] = useState("");
    const [manterLogado, setManterLogado] = useState(false);
    const [logado,setLogado] = useState(false)
    const [erro,setErro] = useState("");

    const usuarioCorreto = "admin";
    const senhaCorreta = "123";

    useEffect(() =>{    
        const usuarioLogado = localStorage.getItem("usuarioSalvo")
        if(usuarioLogado){
            setUsuario(usuarioLogado)
            setLogado(true)
        }
    })

    function login(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(usuario == usuarioCorreto && senha == senhaCorreta){
            setLogado(true);
            setErro("");

            if(manterLogado){
                localStorage.setItem("logado","true");
                localStorage.setItem("usuarioSalvo",usuario);
            }
        }
        else{
            setLogado(false);
            setErro("Usuário e/ou senha incorretos");
        }
    }

    function logout(){
        setLogado(false);
        setUsuario("");
        setSenha("")
        setManterLogado(false)
        localStorage.clear()
    }

    if(logado){
        return(
            <>
                <h2>Login</h2>
                <h2>Olá, {usuario}!</h2>
                <h2>Login</h2>
                <button onClick={logout}>Sair</button>
            </>
        )
    }   

    return(

        <>
            
            <form onSubmit={ login }>
                <br />
                <label htmlFor="usuario">Usuário </label>
                <input type="text" id="usuario" value={usuario} onChange={((e) => {setUsuario(e.target.value)})}/>
                <br />
                <br />
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" value={senha} onChange={((e) =>{setSenha(e.target.value)})} />
                <br />
                <br />
                <label htmlFor="manterLogado"><input type="checkbox" id="manterLogado" checked={manterLogado} onChange={((e) =>{setManterLogado(e.target.checked)})} />Manter Logado</label>
                <br />
                <br />
                <button type="submit">Entrar</button>
            </form>
            {
                erro && <p>{erro}</p> 
            }
        </>
    )
}
 
export default Page6