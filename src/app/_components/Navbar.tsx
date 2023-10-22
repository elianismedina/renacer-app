"use client";
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

import { ThemeSwitcher } from './ThemeSwitcher';
import Link from 'next/link';



interface NavItem {
    label: string
    page: string

}

const NAV_ITEMS: Array<NavItem> = [

    {
        label: 'Inicio',
        page: '/',
    },
    {
        label: 'El consejo',
        page: '/concejo',
    },
    {
        label: 'Proyectos',
        page: 'projectos',
    },
    {
        label: 'Donaciones',
        page: 'donaciones',
    },
    {
        label: 'Noticias',
        page: 'noticias',
    },
    {
        label: 'Contacto',
        page: '/contact',
    },
]

const Navbar = () => {

  
  const [navbar, setNavbar] = useState(false)
  return (
    <header className='w-full mx-auto px-4 bg-slate-50 text-black shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:items-center md:flex'>
            <div>
              <div className='flex items-center justify-between py-3'>
                <div className='md:py-2 md:block'>
                    <h2 className='text-lg font-semibold dark:text-neutral-100'>Renacer negro</h2>
                </div>
                <div className='md:hidden p-0 mr-5'>
                    <button onClick={()=>setNavbar(!navbar)}>{navbar ? <IoMdClose size={20}/> : <IoMdMenu size={20}/>}</button>
                </div>
              </div>
            </div>
            <div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}>
              <div className='items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0'>
                {NAV_ITEMS.map((item, idx) => {
                    return (
                        <Link
                        key={idx}
                        href={item.page}
                        className={"block lg:inline-block text-lime-950 font-bold hover:text-neutral-500 dark:text-neutral-100"}
                        onClick={() => setNavbar(!navbar)}
                        >
                            {item.label}
                        </Link>
                    )
                })}
              </div>
              <ThemeSwitcher/>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
