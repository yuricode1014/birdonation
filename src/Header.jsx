import React from "react";
import "./header.css";

const Header = ({ currentView }) => {
  function titleHandler() {
    if (currentView === "entry") {
      return <h1>birdonation</h1>;
    }
    if (currentView === "list") {
      return <h2>list</h2>;
    }
  }
  return <header id="title">{titleHandler()}</header>;
};

export default Header;
