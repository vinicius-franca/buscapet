"use client";
import { useEffect, useState } from 'react';
/* import NavBar from '@/components/Navbar'
import AnimalList from '@/components/Animallist';
 */
function Home() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <main className="min-h-screen flex flex-col items-center justify-between  bg-gray-200">
        <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
          {/* <AnimalList /> */}
        </div>
      </main>
    </div>
  )
}
export default Home;