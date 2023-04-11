import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Nav() {
    return (
        <nav className="bg-purple-400 justify-between flex text-white">
            <div className="justify-items-start my-7">
                <a className="px-3">About</a>
                <a className="px-3">Start your Project!</a>
            </div>
            <div className="my-7">
            <h1 className="justify-items-center text-3xl font-bold underline">Spacetastic Science</h1>
            </div>
            <div className="justify-items-end my-7">
                <a className="px-3">Login</a>
                <Link className="px-3" to="/signup"> Signup</Link>
            </div>
        </nav>
    );
}

export default Nav;
