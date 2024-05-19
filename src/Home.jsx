import React from "react";
import { Link } from "react-router-dom";


export default function Home(){
    return (
        <div className="px-12 py-20 bg-[url(/src/assets/bg-img.svg)] bg-cover bg-no-repeat h-full">
            <h1 className="font-Inter font-extrabold text-4xl text-white">You got the travel plans, we got the travel vans.</h1>
            <p className="font-Inter text-white font-medium mt-6 mb-14">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link 
                className="font-Inter text-white bg-[#FF8C38] flex justify-center items-center px-4 py-3 w-full rounded-lg" 
                to={"/vans"}
            >
            Find Your Van</Link>
        </div>
    )
}