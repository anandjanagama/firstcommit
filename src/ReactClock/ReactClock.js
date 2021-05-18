import React from 'react';
import ThemedDigitalClock from 'themed-digital-clock';

const ReactClock=()=>{
    return(
        <>
<div className="App">
        <ThemedDigitalClock
          description="The time now in New York"
          timezoneName="America/New_York"
          useDarkTheme={true}
          size={400}
        />
      </div>
        </>
    )
};

export default ReactClock;