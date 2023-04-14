// import { set } from "mongoose";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import spaceBackground from "../images/space.jpg";
import { Link } from "react-router-dom";

function SignUpForm(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const HandleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("is this working?");
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
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
      <div className="relative">
        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg"
          onSubmit={HandleFormSubmit}
        >
          <label>
            Username
            <input
              className="text-black"
              type="username"
              name="username"
              onChange={handleInputChange}
              placeholder="Username"
            />
          </label>
          <label>
            Email
            <input
              className="text-black"
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              className="text-black"
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
            />
          </label>

          <Link
            className="px-3 p-2 m-2 border-solid border-2 border-purple-300 rounded-lg"
            to="/project"
            type="submit"
          >
            Login/Create Account
          </Link>
        </form>
        <img src={spaceBackground} alt="background" />
      </div>
    </div>
  );
}
export default SignUpForm;
