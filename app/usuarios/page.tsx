"use client"
import Sidebar from "@/components/sidebar";
import Upbar from "@/components/upbar";
import Link from "next/link";
import React, { useState } from "react";

const Usuarios = () => {

    class usuario {
        id: number
        nome: string
        permissao: string

        constructor(id: number, nome: string, permissao: string) {
            this.id = id
            this.nome = nome
            this.permissao = permissao
        }
    }

    const meuArrayUsuarios = []
    meuArrayUsuarios.push(new usuario(1, "Jorge", "ADM"))
    meuArrayUsuarios.push(new usuario(1, "Ellen", "Gestor"))
    meuArrayUsuarios.push(new usuario(1, "Manuela", "Gestor"))
    meuArrayUsuarios.push(new usuario(1, "Ludo", "Associado"))

    return (
        
        <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
            <section className="flex">
                <Upbar></Upbar>
                <Sidebar></Sidebar>
                <section className="m-32 justify-start text-white">
                    <h1 className='font-bold text-3xl'>LISTAGEM DE USUÁRIOS</h1>
                        <br/>
                        <table><tr><th>ID:</th><th>Nome:</th><th>Permissão</th></tr></table>
                        {meuArrayUsuarios.map((usuario) => (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <td className="text-gray-600">{usuario.id}</td><td className="text-gray-600">{usuario.nome}</td><td className="text-gray-600">{usuario.permissao}</td>
                                        </tr>
                                    </thead>
                                    
                                </table>
                            </div>
                        ))}
                    
                    <br/><br/><Link href="/" className="">Voltar</Link>
                </section>
            </section>                     
        </main>

    )
}

export default Usuarios;