import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import ListItems from "./ListItems";

function Giphy() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("/api/Giph")
      .then(res => {
        if (res.data) {
          setItems(res.data);
        }
      })
      .catch(err => console.log(err));
  };

  const deleteItem = id => {
    axios
      .delete(`/api/Giph/${id}`)
      .then(res => {
        if (res.data) {
          getItems();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Environmental List</h1>
      <Input getItems={getItems} />
      <ListItems items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default Giphy;
