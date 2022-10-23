import React from 'react'
import { link } from "react-router-dom";

function NavBar() {
 
 
 
 
 
 
  return (
    <div className="nav-bar">NavBar
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/journal_entries"> Journal </Link>
      </div>
      <div>
        <Link to="journal_entries/new"> New Entry </Link>
      </div>
    </div>
  )
}

export default NavBar