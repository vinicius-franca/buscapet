"use client";
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PropTypes from 'prop-types';

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

function NavLink({ href, exact, children, ...props } ) {
    return <Link href={href} {...props}>
        {children}
    </Link>
}


function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center bg-green-600">
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
                <div className="flex md:flex">
                    <NavLink href="/" exact className="text-xl nav-item nav-link text-white m-3">
                        Ínicio
                    </NavLink>
                    <NavLink href="/minha-conta" exact className="text-xl nav-item nav-link text-white m-3">
                        Minha conta
                    </NavLink>
                    <NavLink href="/meus-animais" exact className="text-xl nav-item nav-link text-white m-3">
                        Meus animais
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;