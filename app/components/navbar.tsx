'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };   

    return (
        <nav className="sticky flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-blue-500 p-6 h-20 shadow-2xl">
            <div className="p-2 mr-4 inline-flex items-center text-white hover:text-white">
                <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                    >
                    </path>
                </svg>
                <Link href="/" className="text-xl font-bold uppercase tracking-wide">
                    AP Score Calculator
                </Link>
            </div>
            <button onClick={toggleDropdown} className="text-white inline-flex p-3 hover:bg-green-600 rounded ml-auto hover:text-white outline-none nav-toggler">
                <i className="material-icons">Menu</i>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto flex justify-end items-center z-[999999] absolute right-0`} id="navigation">
                <div className="x=[99999] bg--white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 relative">
                    <ul className="bottom-0">
                        <li>
                            {isOpen && (
                                <>
                                    <Link href="/calcbc" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bottom-0">
                                        AP Calculus BC
                                    </Link>
                                    <Link href="/enm" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bottom-0">
                                        AP Physics C Electricity and Magnetism
                                    </Link>
                                    <Link href="/enm" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bottom-0">
                                        AP Physics C Mechanics
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
