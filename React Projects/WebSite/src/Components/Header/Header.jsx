import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header(){
    return(
        <div className="w-full h-20 bg-[#FEE715] flex justify-around items-center">
            <div>
                <h1 className="text-3xl font-bold">LOGO</h1>
            </div>
            <div>
                <ul className="flex gap-10">
                    <li>
                        <Link to='/' className="text-1.6xl font-bold hover:text-teal-500 hover:underline font-sans">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-1.6xl font-bold hover:text-teal-500 hover:underline font-sans">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="text-1.6xl font-bold hover:text-teal-500 hover:underline font-sans">Contact</Link>
                    </li>
                    <li>
                        <Link to='/github' className="text-1.6xl font-bold hover:text-teal-500 hover:underline font-sans">Github</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-5">
                <button className="bg-transparent hover:bg-[#101820] text-bg-[#101820] font-semibold hover:text-white py-2 px-4 border border-[#101820] hover:border-transparent rounded">LOGIN</button>
                <button className="bg-[#101820] hover:bg-transparent border hover:border-[#101820] hover:text-black text-white font-bold py-2 px-4 rounded-full">GET STARTED</button>
            </div>
        </div>
    )
}