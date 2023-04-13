import React from "react";
import SolarBodiesSearch from "./BodiesSearch";
import Examples from "./Examples";
import spaceBackground from "../images/space.jpg"

function Hero() {
  return (
    <div>
      <div className="relative">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg">
          Begin your search for space facts to make the coolest science project
          ever!
        </h2>
        <img src={spaceBackground} alt="background" />
      </div>
      {/* <button>Create Account</button>
      <SolarBodiesSearch />
      <Examples /> */}
    </div>
  );
}

export default Hero;
