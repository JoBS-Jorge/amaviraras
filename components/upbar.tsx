import Image from 'next/image'
import logoAmaviraras from '../public/logo-amavi-horizontal.svg'


const upbar = () => {
    return (
        <div className="fixed h-20 left-0 top-0 w-full flex justify-center pt-8 lg:p-4 lg:dark:bg-gray-50 drop-shadow-lg">
          <div className='flex'><Image src={logoAmaviraras} alt="Logo Amaviraras"/></div>
          <a href='#' className="fixed h-10 w-10 top-6 right-10 justify-end hover:text-gray-900">LOGIN
          </a>

        </div>
    )
}

export default upbar;