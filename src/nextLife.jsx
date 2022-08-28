import React from "react";

const NextLife = ({ count }) => {
  const url = [
    "../sausage.png",
    "../oyashirazu.png",
    "../kinoko.gif",
    "../hotate.png",
  ];

  const name = [
    "お弁当のソーセージ",
    "ちょっと斜めの親知らず",
    "きのこの親父",
    "セクシーなほたて",
  ];

  function NextLifeAssigner() {
    return count > 20 ? (
      <div>
        <img src={url[4]} />
        <h3>{name[4]}です</h3>
      </div>
    ) : count > 15 ? (
      <div>
        <img src={url[3]} />
        <h3>{name[3]}です</h3>
      </div>
    ) : count > 10 ? (
      <div>
        <img src={url[2]} />
        <h3>{name[2]}です</h3>
      </div>
    ) : count > 5 ? (
      <div>
        <img src={url[1]} />
        <h3>{name[1]}です</h3>
      </div>
    ) : (
      <div>
        <img src={url[0]} />
        <h3>{name[0]}です。</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <h3 id="title">あなたの来世は...</h3>
      {NextLifeAssigner()}
    </div>
  );
};

export default NextLife;
