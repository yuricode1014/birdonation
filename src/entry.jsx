import React from "react";
import { useState } from "react";

const Entry = ({ setView, sendData, setText }) => {
  function handleSubmit(e) {
    sendData();
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="a bird a day !!"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input type="submit" value="submit" />
      </form>

      <button
        onClick={() => {
          setView("list");
        }}
      >
        listを見る
      </button>
    </div>
  );
};

export default Entry;
