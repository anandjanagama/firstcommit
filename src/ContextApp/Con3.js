import React from "react";
import { name, lname } from "./ContextApp";
const Con3 = () => {
  return (
    <>
    
      <name.Consumer>
        {(fname) => {
          return (
            <lname.Consumer>
              {(llname) => {
                return (
                  <h1>
                    hello {fname} {llname}
                  </h1>
                );
              }}
            </lname.Consumer>
          );
        }}
      </name.Consumer>
    </>
  );
};

export default Con3;
