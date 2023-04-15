// import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import spaceBackground from "../images/space.jpg";


function SignUpForm(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    navigate('/project');
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


  return (
    <div>
      <div className="relative">
        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg"
          onSubmit={handleFormSubmit}
        >
          <label>
            Username
            <input
              className="text-black"
              type="username"
              name="username"
              onChange={handleInputChange}
              placeholder="Username"
              required
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
              required
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
              required
            />
          </label>
          {/* <label>
          Confirm Password
          <input type="text" name="Confirm Password" />
        </label> */}
          <input
            type="submit"
            value="Login/Create Account"
          />
          {/* <Link className="px-3 p-2 m-2 border-solid border-2 border-purple-300 rounded-lg" to="/project" type="submit"> Login/Create Account</Link> */}
          
        </form >
        <img src={spaceBackground} alt="background" />
      </div>
    </div>
  );
}

export default SignUpForm;