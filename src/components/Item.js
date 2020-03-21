import React from "react";
import "./Item.css";
function item(props) {
  return props.item ? (
    <div className="Item">
      <h1>{props.item.title}</h1>
      <p>{props.item.body}</p>
    </div>
  ) : (
    <p>No Item</p>
  );
}

export default item;
