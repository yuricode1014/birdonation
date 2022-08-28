import React, { startTransition } from "react";

const List = ({ setView, lists }) => {
  function lineUpLists() {
    return lists.map((list) => {
      return (
        <div>
          <p>🕊 {list}</p>
        </div>
      );
    });
  }

  return <div>{lineUpLists()}</div>;
};

export default List;
