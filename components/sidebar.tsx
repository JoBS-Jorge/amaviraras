"use client"
import Image from "next/image"
import menuIcon from '../public/menu.svg'
import iconBack from '../public/iconBack.svg'
import inclusao from '../public/inclusao.svg'
import home from '../public/home.svg'
import usuarios from '../public/usuarios.svg'
import voltar from '../public/voltar.svg'
import tratamentos from '../public/tratamentos.svg'
import inclusaoSintoma from '../public/inclusaoSintoma.svg'
import { useState } from "react"
import Link from "next/link"



const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    
    return (
        
            <div className="flex relative left-0 drop-shadow-lg items-center text-center">
                <aside className="w-20 bg-white justify-start h-screen">
                    <Image src={menuIcon} alt="icone menu" className='bg-gray-400 text-white rounded-full border border-white cursor-pointer h-10 w-10 m-5 ' onClick={handleOpen}/>
                    <section className='text-gray-500'>
                            <fieldset className='p-7'>
                                <legend className='text-3xl top-5 opacity-0'>MENU</legend>
                                <div className='text-lg'>
                                    <Link href="/" className='justify-center'>
                                        <Image src={home} alt={"icone home"}></Image>
                                    </Link>                    
                                </div>
                                <div className='text-lg'>
                                    <Link href="/novadoenca" className='justify-center'>
                                        <Image src={inclusao} alt={"icone inclusao"}></Image>
                                    </Link>                    
                                </div>
                                <div className='text-lg cursor-pointer'>
                                    <Link href="/cadastrarSintomas">
                                        <Image src={inclusaoSintoma} alt={"icone inclusao"}></Image>
                                    </Link>                    
                                </div>
                                <div className='text-lg cursor-pointer'>
                                    <Link href="/usuarios">
                                        <Image src={usuarios} alt={"icone inclusao"}></Image>
                                    </Link>                    
                                </div>
                                <div className='text-lg cursor-pointer'>
                                    <Link href="/tratamentos">
                                        <Image src={tratamentos} alt={"icone inclusao"}></Image>
                                    </Link>                    
                                </div>
                                <div className='text-left cursor-pointer'>
                                    <br/><br/><Link href="/" className="font-bold text-2xl">
                                        <Image src={voltar} alt={"icone inclusao"}></Image>
                                    </Link>                   
                                </div>
                                
                            </fieldset>
                        </section>
                </aside>
                {isOpen && (
                    <aside className="w-96 bg-white justify-start h-screen">
                        <Image src={iconBack} alt="icone fechar menu" className=' bg-gray-500 text-white rounded-full border border-white cursor-pointer h-10 w-10 m-5' onClick={handleClose}/>
                        <div className='text-gray-500'>
                            <fieldset className='p-7'>
                                <legend className='text-3xl top-5'>MENU</legend>
                                <div className='text-left text-lg'>
                                    <Link href="/novadoenca"> Home</Link>                    
                                </div>
                                <div className='text-left text-lg'>
                                    <Link href="/novadoenca"> Incluir Nova Doença</Link>                    
                                </div>
                                <div className='text-left text-lg'>
                                    <Link href="/cadastrarSintomas">Cadastrar Sintomas</Link>                    
                                </div>
                                <div className='text-left text-lg'>
                                    <Link href="/usuarios">Usuários</Link>                    
                                </div>
                                <div className='text-left text-lg'>
                                    <Link href="/tratamentos">Tratamentos</Link>                    
                                </div>
                                <div className='text-left'>
                                    <br/><br/><Link href="/" className="font-bold text-2xl">Voltar</Link>                   
                                </div>
                                
                            </fieldset>
                        </div>
                        
                    </aside>
                )}
                
                
            </div>
            
        
        
    )
}
export default Sidebar;