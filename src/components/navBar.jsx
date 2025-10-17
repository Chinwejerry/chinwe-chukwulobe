import { Link } from "react-router";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-600   shadow-sm text-slate-200 sticky top-0 p-2 flex justify-between items-center">
      <div className="flex-1 font-edu ">
        <Link to="/">
          <span className="text-5xl ">C</span>hinwe
        </Link>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1  flex justify-between items-center gap-3">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
