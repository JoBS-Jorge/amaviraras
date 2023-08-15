import Image from "next/image"
import home from '../public/home.svg'
import inclusao from '../public/inclusao.svg'
import usuarios from '../public/usuarios.svg'



export const SidebarDados = [
    {
        title:"Home",
        icon:<Image src={home} alt={"icone Home"}></Image>,
        link: "/"
    },
    {
        title:"Nova Doença",
        icon:<Image src={inclusao} alt={"icone Nova Doença"}></Image>,
        link: "/novadoenca"
    },
    {
        title:"Usuários",
        icon:<Image src={usuarios} alt={"icone Usuários"}></Image>,
        link: "/usuarios"
    },

    
]