"use client"
import React from 'react'
import Image from "next/image"
import 'react-toastify/dist/ReactToastify.min.css'
import searchIcon from '../public/searchIcon.svg'

const searchBar = () => {

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
    meuArrayDoencas.push(new DoencaRara("1122" , "Lupus" , "Doença inflamatória crônica de origem autoimune. Pode ser cutâneo ou sistêmico..." , 2 , true, "https://www.mymedfarma.com/files/images/gallery/CAPD_systemic_lupus_erythematosus_1311518012015.jpg"))
    meuArrayDoencas.push(new DoencaRara("2233" , "Angioedema" , "Doença que apresenta inchaço de áreas de tecido subcutâneo que, por vezes afeta a face e a garganta..." ,  3 , true, "https://d8tzmbmuvomgp.cloudfront.net/medialibrary/pce-content/the-exchange/images/266/hae-exchange-post.png"))
    meuArrayDoencas.push(new DoencaRara("6644", "Esclerose Lateral Amiotrófica" , "Doença que afeta a o sistema nervoso central de forma degenerativa e progressiva..." ,  1 , false, "https://biosom.com.br/blog/wp-content/uploads/2017/08/Stephen-hawking-Amyotrophic-lateral-sclerosis.jpg"))
    meuArrayDoencas.push(new DoencaRara("884544", "HPTEC" , "Doença rara que ocorre quando um trombo se aloja nos pulmões, dificultando assim a circulção sanguinea..." ,  1 , false, "https://pb-brasil247.storage.googleapis.com/pb-b247gcp/swp/jtjeq9/media/20180702110740_45c29a397f2a1bb4efef2b133ee570b384030c95726f73587641a8619da381ed.jpeg"))
    
    // const doencasEmJSON = JSON.stringify(meuArrayDoencas)
    // localStorage.setItem("meuArrayDoencas", doencasEmJSON)
    
    let pesquisa = document.querySelector('Searchbar')
    
    const [search, setSearch] = React.useState("")
    const searchLowerCase = search.toLocaleLowerCase()
    
    const doencas = meuArrayDoencas.filter(doenca => 
      doenca.nome.toLocaleLowerCase().includes(searchLowerCase) ||
      doenca.descricao.toLocaleLowerCase().includes(searchLowerCase)
      )
    
    
    return (
<>      <section className='m-10 '>
          <div id="cards" className='justify-center m-20'>
            <section className='items-center'>
            
              <div id="id_searchbar" className="w-11/12 md:w-8/12 h-auto p-5 rounded-3xl bg-white drop-shadow-2xl flex flex-col">
                <section className="w-full h-10 flex items-center">
                    <span className="w-10 h-full flex items-center text-xl">
                        <Image src={searchIcon} alt={"icone busca"}/>
                    </span>
                    <input id="pesquisar" type="search" placeholder="pesquise aqui..." className="w-full h-full font-medium md: pl-2 focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button id="searchButton" className="w-28 h-full bg-blue-700 flex justify-center items-center rounded-2xl text-white font-medium">Pesquisar</button>
                </section>
              </div>


            </section>
            
            <div className='m-20 grid grid-cols-4 gap-8 items-center'>                        
              {doencas.map((doenca) => (
                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-100 hover:bg-gray-200">
                <a href="#">
                    <img className="rounded-t-lg" src={doenca.srcImagem} alt="imagem referência" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">{doenca.nome}</h5>
                    </a>
                    <p className="mb-3 font-medium text-lg text-gray-700 dark:text-gray-400">{doenca.descricao}</p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
              </div>
              ))}                    
            </div>  
          </div>
        </section></>
    )
}
export default searchBar;

function filtrar(this: HTMLElement, ev: MouseEvent) {
    throw new Error("Function not implemented.")
}

