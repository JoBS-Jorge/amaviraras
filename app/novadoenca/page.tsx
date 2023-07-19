import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'
import Upbar from '@/components/upbar'
import Sidebar from "@/components/sidebar"

const Inclusao = () => {


    return (
        
            <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
                <div className="text-white">
                    <Upbar></Upbar>
                    <Sidebar></Sidebar>

                    <div className='items-center m-20'>
                        <div className='m-20 items-center'>
                            <div>CID:</div>
                                <div>
                                    <input type="text" name="CID" id="idCID" className='text-gray-600'/><br/>
                                </div>

                                <div>Nome Doença:</div>
                                <div>
                                    <input type="text" name="nameDoenca" id="idDoenca" className='text-gray-600'/>
                                </div>

                                <fieldset className='p-2'>
                                    <label>Possui tratamento?</label><br/>
                                    <li className='list-none'><input type="radio" name="simTratamento" id="idTratamentoS"/> Sim</li>
                                    <li className='list-none'><input type="radio" name="naoTratamento" id="idTratamentoN"/> Não</li>
                                    
                                </fieldset>
                                <div>Descrição Doença: </div>
                                <div>
                                    <textarea name="descDoenca" id="idDescDoenca" className="w-96 h-96 text-gray-600"/>
                                </div>
                            <button >Cadastrar</button>
                        </div>
                    
                        <ToastContainer />                    
                    </div>                    
                </div>
            </main>         

    )
}

export default Inclusao;



