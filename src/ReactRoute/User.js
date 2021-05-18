import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
const User = ( )=>{

    const {name}=useParams();
    const location = useLocation();
    const history=useHistory();
return(
    <>
<h1>Hello User!!! {name} </h1>
<p>My location is {location.pathname} </p>
{location.pathname === `/second/third/user/pro` ? (<button onClick={()=>{alert('App is loading!!')}} > clickme</button>): null}

<button onClick={()=> history.goBack()} >goback</button>
    </>
)

};

export default User;