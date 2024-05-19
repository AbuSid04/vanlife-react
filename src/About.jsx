import React from "react";
import image from "../src/assets/about-page.svg"
import { Link } from "react-router-dom";


export default function About(){
    return(
        <div>
            <img 
                src={image} 
                alt="image of a person sitting on top of van." 
                className="w-full"
            />

            <div className="px-12 py-12 bg-[#FFF7ED]">
                <h2 className="font-Inter text-[2rem] font-bold leading-10 text-[#161616]">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p className="font-Inter font-medium text-[#161616] my-8">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                <br />
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <div className="bg-[#FFCC8D] px-8 py-10 rounded-lg">
                    <h3 className="font-Inter text-[#161616] font-bold text-2xl mb-8">Your destination is waiting. Your van is ready.</h3>
                    <Link 
                        className="font-Inter bg-[#161616] text-white px-6 py-3 rounded-xl" 
                        to={"/vans"}
                    >
                    Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}