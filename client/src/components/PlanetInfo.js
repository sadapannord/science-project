import React from "react";
const PlanetProvider = (props) => {
  let moons = "0";
  if (props.result.moons && Array.isArray(props.result.moons)) {
    moons = props.result.moons.length.toString();
  }
  return (
    <div>
      <p>My name is {props.result.englishName}</p>

      <p> Here are some cools facts about me!</p>

      <li>
        <p>I have {moons} moons</p>
      </li>
      <li>
        <p>
          I have a density of {props.result.density}
          <sup>n</sup>
        </p>
      </li>
      <li>
        <p>
          My surface gravity is {props.result.gravity}m.s<sup>-2</sup>
        </p>
      </li>
      <li>
        <p>
          My average temperature is {props.result.avgTemp}
          <sup>oK</sup>
        </p>
      </li>
      <li>
        <p>
          I tilt around my axis at {props.result.axialTilt}
          <sup>o</sup>
        </p>
      </li>
      <li>
        <p>My average radius is {props.result.meanRadius} kilometers</p>
      </li>
    </div>
  );
};

export default PlanetProvider;
