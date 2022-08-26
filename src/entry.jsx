import React from "react";
import { useState } from "react";

const Entry = () => {
  const [text, setText] = useState("");
  const [Submit, isSubmited] = useState(false);

  const sendData = () => {
    const body = { text };

    fetch("/goodlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => {
        setText("");
        isSubmited(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="a bird a day !!"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="submit"
        value="tweet"
        onClick={() => {
          sendData();
        }}
      />
    </div>
  );
};

export default Entry;
