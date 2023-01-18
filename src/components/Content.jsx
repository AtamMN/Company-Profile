import React from "react";
import { FaBrain, FaCrown, FaHandshake } from "react-icons/fa";

function Content(){
    return(
        <div className="w-full">
            <h1 className="font-bold text-lg">OUR VALUES</h1>
            <div className="flex flex-wrap gap-10 justify-center py-5">
                <div className="flex flex-col bg-red-400 text-white px-10 py-10 items-center">
                    <FaBrain size={30} className="mb-5"/>
                    <h1 className="font-semibold">INNOVATIVE</h1>
                    <p>lorackjae</p>
                </div>
                <div className="flex flex-col bg-emerald-500 text-white px-10 py-10 items-center">
                    <FaHandshake size={30} className="mb-5"/>
                    <h1 className="font-semibold">LOYALTY</h1>
                    <p className="">lorackjae</p>
                </div>
                <div className="flex flex-col items-center bg-sky-500 text-white px-10 py-10">
                    <FaCrown size={30} className="mb-5"/>
                    <h1 className="font-semibold">RESPECT</h1>
                    <p>lorackjae</p>
                </div>
            </div>
        </div>
    )
}
export default Content;