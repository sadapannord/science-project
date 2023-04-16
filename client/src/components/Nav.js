import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
function Nav() {
    return (
        <nav className="bg-purple-400 justify-between flex text-white flex-wrap">
            <div className="justify-items-start my-7 hidden lg:block">
                {/* <a className="px-3">About</a> */}
                <Link className="px-3 p-2 m-2 border-solid border-2 border-purple-300 rounded-lg" to="/signup"> Start Your Project!</Link>
            </div>
            <div className="my-7">
            {/* <h1 className="justify-items-center text-3xl font-bold antialiased">Spacetastic Science</h1> */}
            <Link className="justify-items-center text-3xl font-bold antialiased" to="/">Spacetastic Science</Link>
            </div>
            <div className="justify-items-end my-7">
                <Link className="px-3 p-2 m-2 border-solid border-2 border-purple-300 rounded-lg" to="/login"> Login</Link>
                <Link className="px-3 p-2 m-2 border-solid border-2 border-purple-300 rounded-lg" to="/signup"> Signup</Link>
            </div>
        </nav>
    );
}
export default Nav;