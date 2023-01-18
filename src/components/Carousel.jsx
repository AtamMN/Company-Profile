import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel(){
    const slides = [
        {
            url: "https://images.unsplash.com/photo-1589779255235-85dc2a054145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
    ];

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        const isFirst = current === 0;
        const newSlide = isFirst ? slides.length - 1 : current - 1;
        setCurrent(newSlide)
    }

    const nextSlide = () => {
        const isLast = current === slides.length - 1;
        const newSlide = isLast ? 0 : current + 1;
        setCurrent(newSlide)
    }

    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 group">
            <div style={{backgroundImage: `url(${slides[current].url})`}} className="absoulute w-full h-full bg-center bg-cover duration-500">
                {current === 0 ? 
                    <div className="absolute top-[50%] rounded-2xl -translate-x-0 traslate-y-[-50%] left-32 text-2xl bg-black/60 text-white duration-500">
                        <h2 className="font-bold px-2 py-2">A PLACE WHERE WE CREATE WONDERFUL THINGS</h2>
                        <p className="pb-2">it is indeed a great place</p>
                    </div> 
                    :
                    <div className="absolute top-[50%] rounded-2xl -translate-x-0 traslate-y-[-50%] right-32 text-2xl bg-black/60 text-white duration-500">
                        <h2 className="font-bold px-2 py-2">DISCUSS FOR THE PLAN IN THE FUTUTRE</h2>
                        <p className="px-2 pb-2">communication is the most important part in the team</p>
                    </div> 
                }
                {/* left */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-4 text-2xl bg-black/20 text-white cursor-pointer">
                    <FaArrowLeft onClick={prevSlide} size={30}/>
                </div>
                {/* right */}
                <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 traslate-y-[-50%] right-4 text-2xl bg-black/20 text-white cursor-pointer">
                    <FaArrowRight onClick={nextSlide} size={30}/>
                </div>
            </div>
        </div>
    )
}
export default Carousel;