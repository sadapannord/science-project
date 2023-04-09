import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Nav() {
  return (
    <nav>
      <a>About</a>
      <a>Start your Project!</a>
      <h1>Spacetastic Science</h1>
      <a>Login</a>
      <Link to="/signup"> Signup</Link>
    </nav>
  );
}

export default Nav;
