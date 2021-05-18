import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const GoogleKeep = ()=>{

    const [addItem, setAddItem]= useState([]);

const AddEvent=(note)=>{
    setAddItem((oldItem)=>{
        return [...oldItem, note]
        
    })
    console.log(note);
    console.log(addItem);
}
const onDelete=(id)=>{
setAddItem((olddata)=>{
    olddata.filter((val, index)=>{
        return index !== id;

        
    })
   
})
}

    return(
        <>
<div>
<Header/>
<CreateNote passout={AddEvent}  />
{
    addItem.map((val, index)=>{
        return (<Note
            key ={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}
            />)
            
    })
}

<Footer/>
</div>

        </>

    )
};

export default GoogleKeep;