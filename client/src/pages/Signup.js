// import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import spaceBackground from "../images/space.jpg";
// import Project from "./Project";

function SignUpForm(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const HandleFormSubmit = async (event) => {
    event.preventDefault();
    const navigate = useNavigate();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

<<<<<<< HEAD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Username") {
      setUsername(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "Password") {
      setPassword(value);
=======
      Auth.login(data.addUser.token);
      navigate("/project");
    } catch (e) {
      console.error(e);
>>>>>>> eed39863fbdf78859401bb1c9c122d9823b283d6
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
<<<<<<< HEAD
      <form>
        {/* <label>
=======
      <div className="relative">
        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg"
          onSubmit={HandleFormSubmit}
        >
          {/* <label>
>>>>>>> eed39863fbdf78859401bb1c9c122d9823b283d6
          First Name
          <input type="text" name="First Name" />
        </label>
        <label>
          Last Name
          <input type="text" name="Last Name" />
        </label> */}
        <label>
          Username
          <input
            type="text"
            name="Username"
            onChange={handleInputChange}
            value={username}
            placeholder="Username"
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="Email"
            onChange={handleInputChange}
            value={email}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="Password"
            onChange={handleInputChange}
            value={password}
            placeholder="Password"
          />
        </label>
        {/* <label>
          Confirm Password
          <input type="text" name="Confirm Password" />
        </label> */}
<<<<<<< HEAD
        <input
          type="submit"
          value="Login/Create Account"
          onClick={() => {
            handleFormSubmit();
          }}
        />
      </form>
=======
          <input type="submit" value="Login/Create Account" />
        </form>
        <img src={spaceBackground} alt="background" />
      </div>
>>>>>>> eed39863fbdf78859401bb1c9c122d9823b283d6
    </div>
  );
}

export default SignUpForm;
