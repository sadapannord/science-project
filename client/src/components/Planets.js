import React, { useState, useEffect } from "react";
// import SolarBodiesSearch from "./BodiesSearch";
import API from "../utils/API";

const Planets = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  function HandleSelect(value) {
    setSearch(value);
  }

  useEffect(() => {
    API.search(search)
      .then((res) => {
        setResult(res?.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <button id="Mercury" onClick={() => HandleSelect("Mercury")}>
        Mercury
      </button>
      <br></br>
      <button id="Venus" onClick={() => HandleSelect("Venus")}>
        Venus
      </button>
      <br></br>
      <button id="Earth" onClick={() => HandleSelect("Earth")}>
        Earth
      </button>
      <br></br>
      <button id="Mars" onClick={() => HandleSelect("Mars")}>
        Mars
      </button>
      <br></br>
      <button id="Jupiter" onClick={() => HandleSelect("Jupiter")}>
        Jupiter
      </button>
      <br></br>
      <button id="Saturn" onClick={() => HandleSelect("Saturn")}>
        Saturn
      </button>
      <br></br>

      <button id="Uranus" onClick={() => HandleSelect("Uranus")}>
        Uranus
      </button>
      <br></br>
      <button id="Neptune" onClick={() => HandleSelect("Neptune")}>
        Neptune
      </button>
    </div>
  );
};

export default Planets;
