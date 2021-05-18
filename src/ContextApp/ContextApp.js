import React, { createContext } from "react";

import Con2 from './Con2';
const name = createContext();
const lname = createContext();

const ContextApp = () => {
  return (
    <>
      <name.Provider value={" rainbow"}>
        <lname.Provider value={"dance"}>
          <Con2/>
          
        </lname.Provider>
      </name.Provider>
    </>
  );
};

export default ContextApp;
export { name, lname };
