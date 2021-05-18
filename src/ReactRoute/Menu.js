import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu = ()=>{
return(
    <>
<NavLink  to='/'  > Aboutus</NavLink> <br/>
<NavLink  to='/second'> contactus</NavLink> <br/>
<NavLink to='/second/third'> services</NavLink> <br/>
<NavLink to='/second/third/user/pro'  >user</NavLink> <br/>
<NavLink  to='/search'  > search</NavLink> <br/>

    </>
);


};

export default Menu;