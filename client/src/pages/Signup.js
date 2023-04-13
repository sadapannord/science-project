// import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import spaceBackground from "../images/space.jpg"

function SignUpForm(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
      variables: { ...formState }
      });

      Auth.login(data.addUser.token);

    } catch (e) {
      console.error(e)
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
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg" onSubmit={handleFormSubmit}>

        {/* <label>
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
            type="username"
            name="username"
            onChange={handleInputChange}
            // value={formState.username}
            placeholder="Username"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            // value={formState.email}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            // value={formState.password}
            placeholder="Password"
          />
        </label>
        {/* <label>
          Confirm Password
          <input type="text" name="Confirm Password" />
        </label> */}
        <input
          type="submit"
          value="Login/Create Account"
        // onClick={() => {
        //   handleFormSubmit();
        // }}

        />
      </form>
      <img src={spaceBackground} alt="background" />
    </div>
    </div>
  );
}

export default SignUpForm;