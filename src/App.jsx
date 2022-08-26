import "./App.css";
import React from "react";
import { useState } from "react";

import List from "./list";
import Header from "./Header";
import Entry from "./entry";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Entry />
      <List />
      <Footer />
    </div>
  );
}

export default App;
