import React from 'react';
import Common from './Common'
import mainpic from './imgs/mainpic.jpg'

const Home= ()=>{

    return(
        <>
<Common name='Grow your business with us' imgsrc={mainpic} visit='/services' btnname='Get Started'  />
        </>
    )
};

export default Home;