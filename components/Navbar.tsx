"use client";
import { useState } from 'react'
import Image from 'next/image'

function NavLink(to:any, children:any) {
    return <a href={to} className={`mx-4 text-white`}>
        {children}
    </a>
}

function MobileNav(open:any, setOpen:any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-green-600 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                <a className="text-xl font-semibold" href="/">
                    <Image
                        className="h-auto max-w-full mb-10"
                        src="/buscapet-logo.svg"
                        width={180}
                        height={100}
                        alt="BuscaPet App"
                    />
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/meus-pets" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Meus Pets
                </a>
                <a className="text-xl font-normal my-4" href="/minha-conta" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Minha Conta
                </a>
            </div>
        </div>
    )
}

function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center bg-green-600">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">
                    <Image
                        className="h-auto max-w-full"
                        src="/buscapet-logo.svg"
                        width={100}
                        height={80}
                        alt="BuscaPet App"
                    />
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/meus-pets">
                        Meus Pets
                    </NavLink>
                    <NavLink to="/minha-conta">
                        Minha Conta
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;