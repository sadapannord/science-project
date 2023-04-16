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
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Mercury" onClick={() => HandleSelect("Mercury")}>
        Mercury
      </button>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Venus" onClick={() => HandleSelect("Venus")}>
        Venus
      </button>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Earth" onClick={() => HandleSelect("Earth")}>
        Earth
      </button>
      <br></br>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Mars" onClick={() => HandleSelect("Mars")}>
        Mars
      </button>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Jupiter" onClick={() => HandleSelect("Jupiter")}>
        Jupiter
      </button>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Saturn" onClick={() => HandleSelect("Saturn")}>
        Saturn
      </button>
      <br></br>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Uranus" onClick={() => HandleSelect("Uranus")}>
        Uranus
      </button>
      <button className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1" id="Neptune" onClick={() => HandleSelect("Neptune")}>
        Neptune
      </button>
      <div className="border-solid border-2 border-purple-200 rounded-lg m-1 p-1">
         {search}
      </div>
    </div>
  );
};

export default Planets;
