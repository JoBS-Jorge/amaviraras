"use client"
import React from 'react'

import 'react-toastify/dist/ReactToastify.min.css'
import Upbar from '@/components/upbar'
import Sidebar from '@/components/sidebar'



export default function Home() {
  class DoencaRara {
    cid: string
    nome: string
    descricao: string 
    criticidade: number
    temTratamento: boolean
    srcImagem: string
    constructor (cid: string, nome: string, descricao: string, criticidade: number, temTratamento: boolean, srcImagem: string){
        this.cid = cid;
        this.nome = nome;
        this.descricao = descricao;
        this.criticidade = criticidade;
        this.temTratamento = temTratamento;
        this.srcImagem = srcImagem;
    }

}

//let usuario = prompt("Usuario:")
//localStorage.setItem("userAcess",usuario)
//let userLogado = localStorage.getItem(usuario)

//array de doenças já inicializado com algumas doenças
const meuArrayDoencas = []
meuArrayDoencas.push(new DoencaRara("1122" , "Lupus" , "Doença que faz com que apareça manchas avermelhadas..." , 2 , true, "https://www.mymedfarma.com/files/images/gallery/CAPD_systemic_lupus_erythematosus_1311518012015.jpg"))
meuArrayDoencas.push(new DoencaRara("2233" , "Angioedema" , "Apresenta inchaço nas partes do corpo..." ,  3 , true, "https://d8tzmbmuvomgp.cloudfront.net/medialibrary/pce-content/the-exchange/images/266/hae-exchange-post.png"))
meuArrayDoencas.push(new DoencaRara("6644", "Esclerose Lateral Amiotrófica" , "Faz isso e aquilo outro..." ,  1 , false, "https://imagens.brasil.elpais.com/resizer/9nk_tYTBxaZye-bLl-rTpQspVGI=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GR2H6MJQMPYC3B2HWO2BSGB7OY.jpg"))
meuArrayDoencas.push(new DoencaRara("884544", "HPTEC" , "Causa várias reações por ter atividades..." ,  1 , false, "https://cdn.acritica.net/img/pc/450/300/dn_noticia/2018/04/1524581284.jpg"))

const doencasEmJSON = JSON.stringify(meuArrayDoencas)
localStorage.setItem("meuArrayDoencas", doencasEmJSON)



  return (
    <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
      <div className='flex'>
        <Upbar></Upbar>
        <Sidebar></Sidebar>
        <div id="cards" className='items-center m-20'>
          <div className='m-20 grid grid-cols-4 gap-8 items-center'>

            
            {meuArrayDoencas.map((doenca) => (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-100 hover:bg-gray-200">
              <a href="#">
                  <img className="rounded-t-lg" src={doenca.srcImagem} alt="imagem referência" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">{doenca.nome}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{doenca.descricao}</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Saiba mais
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </div>
            ))}
                       

          </div>  
        </div>    

      </div>
    </main>
  )
}
