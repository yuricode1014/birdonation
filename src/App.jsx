import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import List from "./list";
import Header from "./header";
import Entry from "./entry";
import FlyBird from "./flybird";

function App() {
  const [currentView, setCurrentView] = useState("entry");
  const [text, setText] = useState("");
  const [lists, setLists] = useState();
  const [count, setCount] = useState();

  //最新のリストをfetchする
  useEffect(() => {
    fetch("/goodlists")
      .then((res) => res.json())
      .then((data) => data.map((obj) => JSON.parse(obj.good_things).text))
      .then((data) => {
        setLists(data);
        setCount(data.length);
      });
  }, []);

  //データを送る・textを空にする
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

  //viewのステータスを変える
  function setView(view) {
    setCurrentView(view);
  }

  //countの数を増やす

  //viewの表示を変える
  function handleView() {
    return currentView === "entry" ? (
      <Entry setView={setView} sendData={sendData} setText={setText} />
    ) : currentView === "list" ? (
      <List setView={setView} lists={lists} setLists={setLists} />
    ) : (
      <FlyBird setView={setView} />
    );
  }

  return (
    <div className="App">
      <Header currentView={currentView} />
      {handleView()}
      <img id="bird" src="../birdnation-bird.gif" />
    </div>
  );
}

export default App;
