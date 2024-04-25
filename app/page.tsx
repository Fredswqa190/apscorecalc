'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDropdown = () => {
    console.log('Button clicked');
    if (isMounted) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
    <Head>
      <title>AP Score Calculator</title>
    </Head>
    <main className="relative h-screen bg-gradient-to-b from-cyan-600 to-green-400 container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <h1 style={{fontSize: '72px', fontWeight: 'bold'}}>Welcome to AP Score Calculator!</h1>
      <p style={{fontSize: '36px'}}>This is the homepage of the AP Score Calculator app.</p>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-white inline-flex p-3 hover:bg-green-600 rounded ml-auto hover:text-white outline-none nav-toggler">
          <i className="material-icons">Supported Tests</i>
        </button>
          {isOpen && (
            <div className="dropdown-menu absolute left-0 mt-2 py-2 w-56 bg-white rounded-lg shadow-xl">
              <Link href="/calcbc">
                <button className="text-black items-center">
                  AP Calculus BC
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
      </>
  );
}
