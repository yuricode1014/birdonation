import React from "react";
import "./header.css";

const Header = ({ currentView, setView }) => {
  function titleHandler() {
    if (currentView === "entry") {
      return <h1 id="title">birdonation</h1>;
    }
    if (currentView === "list") {
      return (
        <h1
          id="title"
          onClick={() => {
            setView("entry");
          }}
        >
          birdonation
        </h1>
      );
    }
    if (currentView === "nextLife") {
      return (
        <h1
          id="title"
          onClick={() => {
            setView("entry");
          }}
        >
          birdonation
        </h1>
      );
    }
  }
  return <header>{titleHandler()}</header>;
};

export default Header;
