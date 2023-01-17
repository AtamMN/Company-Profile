import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar(){
    const [nav, setNav] = useState();

    return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
        <div>
            <h1 className="text-4xl font-bold">Company</h1>
        </div>
        <ul className="hidden md:flex gap-4">
            <li>ABOUT</li>
            <li>OUR WORKS</li>
            <li>OUR TEAM</li>
            <li>CONTACT</li>
        </ul>


        
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-300 md:hidden">
            {nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>

        {!nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/[0.95] to-gray-700/[0.95] gap-6">
            <li>ABOUT</li>
            <li>OUR WORKS</li>
            <li>OUR TEAM</li>
            <li>CONTACT</li>
        </ul>}

    </div>
    )
}
export default Navbar;