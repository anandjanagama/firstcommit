import React, { useContext } from 'react';
import { name,lname } from "./ContextApp";

const Con2 =()=>{
    const fname= useContext(name);
    const laname=useContext(lname);
    return(
        <>
<h1>I am 2 { fname } {laname} </h1>
        </>
    )
};

export default Con2;