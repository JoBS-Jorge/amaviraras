import Sidebar from "@/components/sidebar";
import Upbar from "@/components/upbar";
import Link from "next/link";

const CadastrarSintomas = () => {
    return (
        <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
            <div className="flex">
                <Upbar></Upbar>
                <Sidebar></Sidebar>
                <div className="text-white">                
                    <div className="p-10 justify-start">
                        Cadastro de Sintomas
                        
                        <br/><br/><Link href="/">Voltar</Link>
                    </div>
                </div>                     
            </div>
        </main>

    )
}

export default CadastrarSintomas;