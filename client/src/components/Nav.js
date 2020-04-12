import React from "react";
import { Link } from "react-router-dom";
// import Saved from "./Saved";

function Nav() {
  return (
    <header>
      <Link className="navbar-brand" to="/Saved">
        saved giphy
      </Link>
       
    </header>
  );
}

export default Nav;
