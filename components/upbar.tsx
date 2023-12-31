import Image from 'next/image'
import logoAmaviraras from '../public/logo-amavi-horizontal.svg'
import usuarioLogon from '../public/usuarioLogon.svg'


const upbar = () => {
 
    return (
        <section className="fixed h-24 right-0 top-0 w-full flex justify-center pt-8 lg:p-4 lg:dark:bg-gray-50 drop-shadow-lg">
          <div className='flex'><Image src={logoAmaviraras} alt="Logo Amaviraras"/></div>
          <a href='#' className="fixed h-10 w-10 top-6 right-10 justify-end hover:text-gray-900">
            <Image src={usuarioLogon} alt='usuario'></Image> LOGIN
          </a>

        </section>
    )
}

export default upbar;