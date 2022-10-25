import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      NavBar
      <Link to="/"> Login </Link>
      <Link to="/journal_entries"> Home </Link>
      <Link to="journal_entries/new"> New Entry </Link>
    </div>
  );
}

export default NavBar;
