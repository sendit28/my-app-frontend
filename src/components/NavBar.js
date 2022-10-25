import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <h1>  Time for Reflection </h1>
      <div>
      <Link to="/">  Login </Link>
      </div>
      <div>
      <Link to="/journal_entries">  Home </Link>
      </div>
      <div>
      <Link to="journal_entries/new">  New Entry </Link>
      </div>
    </div>
  );
}

export default NavBar;
