"use client"
import React from 'react'
import 'react-toastify/dist/ReactToastify.min.css'
import Upbar from '@/components/upbar'
import Sidebar from '@/components/sidebar'
import Searchbar from '@/components/searchbar'


export default function Home() {


  return (
    <main className="bg-gradient-linear flex min-h-screen items-center justify-between p-0">

      <section className='flex'>
        <Upbar></Upbar>
        <Sidebar></Sidebar>
        <Searchbar></Searchbar>
        
      

      </section>
    </main>
  )
}
