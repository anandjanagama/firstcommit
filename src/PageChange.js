import React,{useState} from 'react';


const PageChange=()=>{

  let color= 'purple';

  let [bg, setBg]=useState(color)
  
    const onChange=()=>{
         
        setBg("orange")
    }
    const onChange1=()=>{
        setBg("purple")
   }
 
return(
<>
<div style={{background: bg}}>
    <button onClick={onChange} onDoubleClick={ onChange1}>clickme</button>
</div>
</>
)

};

export default PageChange;