import React from "react";

const List = () => {
  const getLists = () => {
    const list = fetch("/goodlists").then((data) => {});
  };

  return (
    <div>
      <h1>Listです!</h1>
    </div>
  );
};

export default List;
