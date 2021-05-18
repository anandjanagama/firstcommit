import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const [note, setNote]=useState({
        title:'',
        content:'',
    });
   const InputEvent =(event)=>{
    //    const title=event.target.value;
    //    const name= event.target.name;
       const {name, value}=event.target;
setNote((oldnote)=>{
  return  {...oldnote, [name]: value,}
})
   }

   const Adddata=()=>{
    props.passout(note)
    setNote({
        title:'',
        content:'',
    })
   }
    return(
        <>
<div className='text-center' >
    <form>
        <input type='text'  onChange={InputEvent}  name='title' value={note.title} placeholder='Title' autoComplete='off' /> <br/>
        <textarea row='' onChange={InputEvent} name='content' value={note.content} placeholder='Write your notes'  /><br/>
        <Button variant="contained" color="primary" onClick={Adddata} >
        <AddIcon/>
      </Button>
    </form>
</div>
        </>

    )
};

export default CreateNote;