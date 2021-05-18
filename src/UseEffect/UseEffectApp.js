import React, { useEffect, useState } from 'react';

const UseEffectApp =()=>{
    const [num, setNum]=useState(0);
    useEffect(()=>{
        alert('now go')
    }, [num])
    return(
        <>
<button onClick={()=>{
    setNum(num + 1);
}} >Click me {num} </button>
        </>
    )
};

export default UseEffectApp;