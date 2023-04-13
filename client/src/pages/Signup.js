// import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function SignUpForm(props) {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <form onSubmit= {handleFormSubmit}>
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
    </div>
  );
}

export default SignUpForm;
