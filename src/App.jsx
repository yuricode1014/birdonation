import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

import List from "./list";
import Header from "./header";
import Entry from "./entry";
import Footer from "./footer";

function App() {
  const [currentView, setCurrentView] = useState("entry");
  const [text, setText] = useState("");
  const [lists, setLists] = useState();

  useEffect(() => {
    fetch("/goodlists")
      .then((res) => res.json())
      .then((data) => data.map((obj) => JSON.parse(obj.good_things).text))
      .then((data) => setLists(data));
  }, []);

  const sendData = () => {
    const body = { text };

    fetch("/goodlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => {
        setText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function setView(view) {
    setCurrentView(view);
  }

  function handleView() {
    return currentView === "entry" ? (
      <Entry setView={setView} sendData={sendData} setText={setText} />
    ) : (
      <List setView={setView} lists={lists} setLists={setLists} />
    );
  }

  return (
    <div className="App">
      <Header />
      {handleView()}
      <Footer />
    </div>
  );
}

export default App;
