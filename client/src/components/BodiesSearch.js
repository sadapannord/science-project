import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from "./BodiesSearchForm";

const SolarBodiesSearch = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const searchBodies = (query) => {
    API.search(query)
      .then((res) => {
        setResult(res?.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    searchBodies("lune");
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchBodies(search);
  };

  //   const { englishName = "", moons = "", isPlanet = "" } = result;

  return (
    <div>
      <SearchForm
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      {/* {id && (
        <div>
          <p>ID: {id}</p>
          <p>English Name: {englishName}</p>
          <p>Moons: {moons}</p>
          <p>Is Planet: {isPlanet}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>} */}
    </div>
  );
};

export default SolarBodiesSearch;
