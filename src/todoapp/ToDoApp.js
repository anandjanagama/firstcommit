import React, { useState } from 'react'
import './ToDoApp.css'
import ToDochild from './ToDochild';

const ToDoApp=()=>{

    const [inputList, setInputList]=useState('');
    const [items, setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value);
        // console.log(event.target.value);
    };



    const ListOfItems=()=>{
     setItems((olditems)=>{
         return [...olditems, inputList];
     })
     setInputList('');
    };

    const deleteItems=(id)=>{
    setItems((olditems)=>{
        
        return olditems.filter((arrElm, index)=>{
           
           
            return index !==id;
           
        })
        
    })
        
    }
 
    return(
        <>
<div className='main_div'>
<div className='center_div'>
    <br/>
    <h1 className='h1'>ToDo List</h1>

    <input type='text' className='input' placeholder='Enter do list' onChange={itemEvent} value= {inputList} />
    <button className= 'button' onClick={ListOfItems}>+</button>
    <ol >
       {
           items.map((itemval, index)=>{
           return  <ToDochild key={index} id={index} text={itemval} onSelect={deleteItems}/>
           })
       }
    </ol>

</div>
</div>

        </>

    )
};

export default ToDoApp;