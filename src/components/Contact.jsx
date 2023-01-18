import React, { useState } from "react";

function Contact(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()
    const [err, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name < 1 || email < 1 || msg < 1){
            setError(true)
        }
    }

    return(
        <div>
            <div className="w-full">
                <h1 className="font-bold text-lg py-10">CONTACT US</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mx-20">
                <label>
                    Name
                </label>
                <input onChange={e=>setName(e.target.value)} type='text' required/>
                { err ?
                <label className="text-red-600">This field is required.</label> : ""}
                <label className="pt-4">
                    Email
                </label>
                <input onChange={e=>setEmail(e.target.value)}  type='email'></input>
                {err ? <label className="text-red-600">Invalid email address.</label> : ""}
                <label className="pt-4">
                    Message
                </label>
                <textarea  onChange={e=>setMsg(e.target.value)} cols="30" rows="10" required></textarea>
                {err ? <label className="text-red-600">This field is required.</label> : ""}
                <button className="bg-cyan-600 text-white my-2 pt-2 rounded-2xl pb-2 ">Submit</button>
            </form>
        </div>
    )

}

export default Contact;