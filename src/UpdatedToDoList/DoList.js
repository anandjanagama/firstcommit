import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const DoList=(props)=>{
const [line, setLine]=useState(false);
    const lineIt=()=>{
      return   setLine(true)
    }
return(
    <>
<div className='todo_style'>
    <span onClick={lineIt}  ><DeleteIcon className= 'deleteIcon'/> </span>
    <li style={{textDecoration: line ? 'line-through' : 'none'}} > {props.value}</li>
</div>
    </>
)

};

export default DoList;