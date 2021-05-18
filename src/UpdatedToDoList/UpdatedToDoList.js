import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DoList from "./DoList";

const UpdatedToDoList = () => {
  const [item, setItem] = useState("");
  const [push, setPush] = useState([]);
  const itemChange = (event) => {
    setItem(event.target.value);
  };

  const itemClick = () => {
    setPush((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div>
        <div>
          <h1>ToDo List</h1>
          <div>
            <TextField
              type="text"
              placeholder="add list"
              onChange={itemChange}
              value={item}
            />
            <Button onClick={itemClick} variant="contained" color="primary">
              <AddIcon />{" "}
            </Button>
            <br />
            <ol>
              {push.map((val, index) => {
                return <DoList value={val} key= {index} id={index} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatedToDoList;
