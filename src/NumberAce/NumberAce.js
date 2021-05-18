import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const NumberAce=()=>{

    const[curr, setCurr]= useState(0);

    const OneUp=()=>{
        return(setCurr(curr + 1))
        
    }
    const OneDown=()=>{
        if(curr>0){
            setCurr(curr-1)
            
        }else{

            setCurr(0)
            alert('limit is 0 🔝')
        }
    }
    

    return(
        <>
<div>
<h1>{curr}</h1>
<div>
<Tooltip title='increase'>
    <Button onClick={OneUp} variant="contained"  color="primary" > 
    <AddIcon/> 
    </Button> 
    </Tooltip>
    <Tooltip title='decrease'>
    <Button onClick= {OneDown} variant="contained"  color="secondary" ><RemoveIcon/></Button >
    </Tooltip>
</div>
    
</div>
        </>
    )
};

export default NumberAce;