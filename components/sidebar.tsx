"use client"
import Image from "next/image"
import menuIcon from '../public/menu.svg'
import iconBack from '../public/iconBack.svg'
import inclusao from '../public/inclusao.svg'
import { useState } from "react"
import Link from "next/link"


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    
    return (
        
            <div className="flex relative left-0 drop-shadow-lg items-center text-center">
                {isOpen && (
                    <aside className="w-96 bg-white justify-start h-screen">
                        <Image src={iconBack} alt="icone fechar menu" className=' bg-gray-400 text-white rounded-full border border-white cursor-pointer h-10 w-10 m-5' onClick={handleClose}/>
                        <div className='text-gray-500'>
                            <fieldset className='p-10'>
                                <legend className='text-3xl top-5'>MENU</legend>
                                <div className='text-left'>
                                    <Link href="/novadoenca" className='justify-center'> Incluir Nova Doença</Link>                    
                                </div>
                                <div className='text-left'>
                                    <Link href="/cadastrarSintomas">Cadastrar Sintomas</Link>                    
                                </div>
                                <div className='text-left'>
                                    <Link href="/usuarios">Usuários</Link>                    
                                </div>
                                <div className='text-left'>
                                    <Link href="/tratamentos">Tratamentos</Link>                    
                                </div>
                                <div className='text-left'>
                                    <br/><br/><Link href="/" className="font-bold text-2xl">Voltar</Link>                   
                                </div>
                                
                            </fieldset>
                        </div>
                        
                    </aside>
                )}
                <Image src={menuIcon} alt="icone menu" className='bg-gray-400 text-white rounded-full border border-white cursor-pointer rotate-180 h-10 w-10 m-5' onClick={handleOpen}/>
            </div>
            
        
        
    )
}
export default Sidebar;