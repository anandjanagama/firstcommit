import React from 'react';

const Sresult = (props)=>{
const img=`https://source.unsplash.com/800x400/?${props.word}`;
    return(
        <>
<img src={img} alt='hello bro' />
        </>
    )
};

export default Sresult;