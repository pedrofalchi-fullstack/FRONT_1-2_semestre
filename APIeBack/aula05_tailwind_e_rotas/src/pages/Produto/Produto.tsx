import { useParams } from "react-router-dom"
import produtos from "../../data/Produtos.json"

const Produto = () =>{
    const {id} = useParams()

    const produto = produtos.find((p) => p.id === Number(id));

    if(!produto){
        return(
            <>
                <main className="flex-1 container mx-auto p-6 ">
                    <div className="grid grid-cols-1 gap-6">
                        <h1 className="text-2xl font-semibold mb-2">Produto não encontrado</h1>
                    </div>
                </main>
            </>
    )
    }
    return(
        <>
        <main className="flex-1 container mx-auto p-6 ">
            <div className="grid grid-cols-1 gap-6">
                <h1 className="text-2xl font-semibold mb-2">Produto: {produto.nome}</h1>
                <h1 className="text-2xl font-light mb-2">Descrição: {produto.descricao}</h1>
            </div>
        </main>
        </>
    )
}
export default Produto