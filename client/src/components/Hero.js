import React from "react";
import SolarBodiesSearch from "./BodiesSearch";
import Examples from "./Examples";

function Hero() {
  return (
    <div>
      <h2>
        Begin your search for space facts to make the coolest science project
        ever!
      </h2>
      <button>Create Account</button>
      <SolarBodiesSearch />
      <Examples />
    </div>
  );
}

export default Hero;
