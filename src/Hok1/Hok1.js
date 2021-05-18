import React, { useEffect, useState } from 'react';

const Hok1=()=>{
const [num, setNum]=useState(0);

useEffect(()=>{
    document.title=`you clicked me ${num} `;
})

const add=()=>{
    
        setNum(num+1);
    
}

    return(
<button onClick={add}  >Clickme {num} </button>

    )
};

export default Hok1;