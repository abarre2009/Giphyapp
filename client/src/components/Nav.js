import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <Link className="navbar-brand" to="/">
        saved giphy
      </Link>
       
    </header>
  );
}

export default Nav;
