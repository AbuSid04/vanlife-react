import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

export default function App(){
  return(
      <div className="flex flex-col w-1/2 mx-auto bg-slate-100">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}
