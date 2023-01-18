import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar(){
    const [nav, setNav] = useState();
    const [dropshown, setDropshown] = useState(false);

    function changeBackground(e) {
        e.target.style.background = 'grey';
    }

    function revertBackground(e) {
        e.target.style.background = 'black';
    }
    

    return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 z-10 fixed">
        <div>
            <h1 className="text-4xl font-bold px-3">Company</h1>
        </div>
        <ul className="hidden md:flex gap-8 px-3">
            <li onMouseOver={() => setDropshown(true)} className="cursor-pointer">
                ABOUT{dropshown && 
                    <ul className="absolute flex flex-col bg-black mt-7" onMouseLeave={() => setDropshown(false)}>
                        <li onMouseEnter={changeBackground} onMouseLeave={revertBackground} className="px-5 py-5">
                            HISTORY
                        </li>
                        <li onMouseEnter={changeBackground} onMouseLeave={revertBackground} onMous   className="px-5 py-5">
                            VISION MISSION
                        </li>
                    </ul>
                    }
            </li>
            <li className="cursor-pointer">OUR WORKS</li>
            <li className="cursor-pointer">OUR TEAM</li>
            <li className="cursor-pointer">CONTACT</li>
        </ul>


        
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-300 md:hidden">
            {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>

        {nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/[0.95] to-gray-700/[0.95] gap-6 md:hidden">
            <li>ABOUT</li>
            <li>OUR WORKS</li>
            <li>OUR TEAM</li>
            <li>CONTACT</li>
        </ul>}
    </div>
    )
}
export default Navbar;