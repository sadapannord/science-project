import React from "react";
import SolarBodiesSearch from "./BodiesSearch";
import Examples from "./Examples";
import spaceBackground from "../images/space.jpg"

function Hero() {
  return (
    <div>
      <div className="relative">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          Begin your search for space facts to make the coolest science project
          ever!
        </h2>
        <img src={spaceBackground} alt="background" />
      </div>
      <button>Create Account</button>
      <SolarBodiesSearch />
      <Examples />
    </div>
  );
}

export default Hero;



// <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
// <div className='absolute text-2xl md:text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//   <p className='tex-red-700'>I am Morgan Freeman</p>