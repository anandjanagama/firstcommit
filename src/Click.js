import React, { useState } from "react";
import "./Click.css";



const Click = () => {
   

    // const state=useState();
    let [count, setCount]=useState(0);

const InNum = () => {
setCount(count+ 1)
   
//   console.log(count++);
//   console.log(state);
};
  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <button className="button" onClick={InNum}>
         
          clickme
        </button>
      </div>
    </>
  );
};

export default Click;
