"use client"
import React from 'react'
import 'react-toastify/dist/ReactToastify.min.css'
import Upbar from '@/components/upbar'
import Sidebar from '@/components/sidebar'
import Searchbar from '@/components/searchbar'
import { SidebarDados } from '@/components/sidebarDados'


export default function Home() {


  return (
    <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">
      <Upbar></Upbar>
      <section className='flex'>
        
        <Sidebar></Sidebar>
        <Searchbar></Searchbar>           
            

      </section>
    </main>
  )
}
