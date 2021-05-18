import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Con1=()=>{
    const [num, setN]= useState(1);
    const [name, setName]= useState('');
    const [move, setMove]= useState('');
    useEffect(()=>{
        // alert('hello')
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name)
            setMove(res.data.moves.length)
        }
        getData();
    })

const numf=(event)=>{
    setN(event.target.value)
}

return(
<>
<h1>The number is <span style={{color:'red'}}> {num} </span></h1>
<h1>My number is <span style={{color:'red'}}> {name} </span></h1>
<h1>I have <span style={{color:'red'}}> {move}  moves </span> </h1>
<select value={num} onChange={numf} >
    <option value='1' >1 </option>
    <option value='25' >25 </option>
    <option value='3' > 3</option>
    <option value='4' > 4</option>
    <option value='5' >5 </option>

</select>
</>

)

};

export default Con1;