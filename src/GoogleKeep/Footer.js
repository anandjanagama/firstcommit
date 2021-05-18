import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Footer=()=>{

    const year = new Date().getFullYear();
    return(
<>
<footer className ='text-center text-bottom' >
    <p> copyright ©️ {year}</p>
</footer>
</>
    )
};

export default Footer;