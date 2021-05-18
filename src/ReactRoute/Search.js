
import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = ()=>{
    const [img, setImg]=useState('');

    const inputEvent=(event)=>{
const data=event.target.value;
setImg(data);
    }


    return(
        <>
<input type='text' placeholder='search image' value={img} onChange={inputEvent} />
{img==='' ? null :<Sresult word={img} /> }

        </>
    )
};

export default Search;