import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="flex justify-between items-center px-12 py-10 bg-[#e0d5c7]">
            <Link to={"/"} className="font-black text-2xl font-Inter">#VANLIFE</Link>
            <div className="flex gap-4">
                <Link to={"/about"} className="text-[#4D4D4D] font-semibold font-Inter focus:text-[#161616] focus:border-b-2 focus:border-[#161616] pb-0.5">About</Link>
                <Link to={"/vans"} className="text-[#4D4D4D] font-semibold font-Inter focus:text-[#161616] focus:border-b-2 focus:border-[#161616] pb-0.5">Vans</Link>
            </div>
        </div>
    )
}