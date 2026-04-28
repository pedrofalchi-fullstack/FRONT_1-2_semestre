import { GraduationCap } from "lucide-react";

const Home = () =>{
    return(
        <>
            <div className="w-screen min-h-[calc(100vh-120px)] bg-gradient-to-br
             from-blue-50 via-gray-100 to-blue-100 flex flex-col justify-center
              items-center px-6 py-12">
                <div className="max-w-3x1 bg-white shadow-x1 rounded-2x1 p-10 border-blue-200">
                    <h2 className="text-3x1 md:text-4xl font-bold text-blue-600 mb-4
                    flex justify-center items-center gap-2">
                        <GraduationCap className="w-8 h-8 text-blue-800" />
                        Bem vindo ao <span className="text-blue-600">AlunoWEB</span></h2>
                        <p className="text-gray-600 text-lg">Este é o sistema de cadastro e gerenciamento de alunos.
                            Aqui você pode visualizar, cadatsrar, atualizar e excluir informações de forma pratica e moderna.
                        </p>

                </div>

            </div>
        </>
    )
}
export default Home;