import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./ItemList.css";
import axios from "axios";
import uuid from "react-uuid";
function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = (shouldAppend = false) => {
    setIsLoaded(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        shouldAppend
          ? setItems([...items, ...response.data])
          : setItems(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
        setIsLoaded(true);
      });
  };

  const handleScroll = event => {
    const element = event.target;
    if (
      isLoaded &&
      element.scrollHeight - element.scrollTop <= element.clientHeight + 200
    ) {
      getItems(true);
    }
  };

  const itemList = items.length
    ? items.map(item => {
        return <Item key={uuid()} item={item}></Item>;
      })
    : null;

  return (
    <div className="ItemList" onScroll={handleScroll}>
      {itemList}
    </div>
  );
}

export default ItemList;
