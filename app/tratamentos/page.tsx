"use client"
import Link from "next/link";
import Upbar from "@/components/upbar";
import Sidebar from "@/components/sidebar";

const Tratamentos = () => {
    return (
        <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
            <section className="flex">
                <Upbar></Upbar>
                <Sidebar></Sidebar>
                <section className="m-32 justify-start text-white">  
                    <h1 className='font-bold text-3xl'>TRATAMENTOS</h1>             
                    <div className="p-10 justify-start">
                        Página de tratamentos
                        
                        <br/><br/><Link href="/">Voltar</Link>
                    </div>
                </section>                     
            </section>
        </main>

    )
}

export default Tratamentos;