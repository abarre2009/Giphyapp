import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchGiphy from "./SearchGiphy";
import BackgroundImage from "../background";
import Nav from "./Nav";
const HomePage = () => {
  return (
    <div className="App">
      <Nav />
      <BackgroundImage />
      <SearchGiphy />
    </div>
  );
};

export default HomePage;
