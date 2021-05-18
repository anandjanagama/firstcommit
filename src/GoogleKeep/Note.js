import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

const Note = (props)=>{

const Deleted = ()=>{
    props.deleteItem(props.id)
};

    return(
        <>
<div>
<h1>{props.title}</h1>
<br/>
<p>{props.content}</p>
<Button variant="contained" color="secondary" onClick ={Deleted} >
  <DeleteOutlineIcon />
</Button>
</div>

        </>

    )
};

export default Note;