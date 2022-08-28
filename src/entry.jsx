import React from "react";
import { useState } from "react";
import "./entry.css";

const Entry = ({ setView, sendData, setText }) => {
  function handleSubmit(e) {
    sendData();
  }

  return (
    <main>
      <form>
        <div className="iptxt">
          <input
            type="text"
            placeholder="今日どんな良いことした?"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <a
          id="regi_btn"
          href="#"
          className="reset flat fade"
          onClick={(e) => {
            handleSubmit();
            setView("bird");
          }}
        >
          登録
        </a>
      </form>

      <div className="buttons">
        <a
          href="#"
          className="reset flat fade"
          onClick={() => {
            setView("list");
          }}
        >
          記録
        </a>
        <a
          href="#"
          className="reset flat fade"
          onClick={() => {
            setView("list");
          }}
        >
          来世
        </a>
      </div>
    </main>
  );
};

export default Entry;
