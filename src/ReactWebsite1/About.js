import React from 'react';
import Common from './Common'
import mainpic from './imgs/mainpic.jpg'
const About= ()=>{

    return(
        <>
<Common name='welcome to About page' imgsrc={mainpic} visit='/contact' btnname='contact now' />
        </>
    )
};

export default About;