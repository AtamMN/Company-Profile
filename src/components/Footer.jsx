import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <div className="w-full pt-4">
            <div className="flex flex-col bg-black text-white py-5">
                <p>Copyright @ 2023 PT Company</p>
                <div className="flex justify-center gap-3 pt-1">
                    <FaFacebook size={20}/>
                    <FaTwitter size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;