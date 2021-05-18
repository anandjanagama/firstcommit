import React,{useState} from "react";


const Form=()=>{
    const [fullName,setFullName]=useState({
        fname:"",
        lname:"",
        ename: "",
    });
  

    const ChangeValue=(event)=>{
        event.preventDefault();
       alert('Submitted!!');
      
    }


    const Write=(event)=>{
       console.log(event.target.value);
       console.log(event.target.name);
       const value= event.target.value;
       const name=event.target.name;
    // const {value,name}=event.target;
    setFullName((preValue)=>{
        console.log(preValue);
        return{
            ...preValue,
            [name]:value,
        }
    })
    //    if (name==='fName')
    //   {
    //     setFullName((prevalue)=>{ 
    //         return{
    //             fname: value,
    //             lname:prevalue.lname,
    //             ename: prevalue.ename,
    //         }
    //                })
    //   }else if(name==='lName'){
    //       setFullName((prevalue)=>{
    //           return{
    //               fname:prevalue.fname,
    //               lname:value,
    //               ename: prevalue.ename,
    //           }
    //       })
    //   }else if(name==='eName'){
    //     setFullName((prevalue)=>{
    //         return{
    //             fname:prevalue.fname,
    //             lname:prevalue.lname,
    //             ename: value,
    //         }
    //     })
    // }
    }



        
   
    return(
<>
<form onSubmit={ChangeValue}>
   <div>
   <h1>Hello {fullName.fname} {fullName.lname}  </h1>
   <p>{fullName.ename}</p>
    <input type = 'text' placeholder='Enter your fname' name='fname' onChange={Write} value={fullName.fname} />
    <input type = 'text' placeholder='Enter your lname'  name='lname' onChange={Write} value={fullName.lname}  />
    <input type = 'email' autoComplete='off' placeholder='Enter your email'  name='ename' onChange={Write} value={fullName.ename}  />

    <button type = 'submit'>Click me</button>
   </div>
   </form>
</>
    );
};

export default Form;
    
