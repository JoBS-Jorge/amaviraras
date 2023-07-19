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
            <div className="flex">
                <Upbar></Upbar>
                <Sidebar></Sidebar>
                <div className="p-1 justify-start">
                    <h1>Lista de usuários do sistema</h1>

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
                    
                    <br/><br/><Link href="/">Voltar</Link>
                </div>
            </div>                     
        </main>

    )
}

export default Usuarios;