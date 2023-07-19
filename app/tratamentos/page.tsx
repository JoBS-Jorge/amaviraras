"use client"
import Link from "next/link";
import Upbar from "@/components/upbar";
import Sidebar from "@/components/sidebar";

const Tratamentos = () => {
    return (
        <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
            <div className="flex">
                <Upbar></Upbar>
                <Sidebar></Sidebar>
                <div className="text-white">                
                    <div className="p-10 justify-start">
                        Página de tratamentos
                        
                        <br/><br/><Link href="/">Voltar</Link>
                    </div>
                </div>                     
            </div>
        </main>

    )
}

export default Tratamentos;