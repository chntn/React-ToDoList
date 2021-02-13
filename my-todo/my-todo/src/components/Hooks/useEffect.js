
import React, { useState } from 'react';


export default function CounterComp(props) {

  console.log(props.initialCount);
  const [countNew, setCountNew] = useState(props.initialCount);

  return (
    <>
     Use State Count: {countNew}
      <button onClick={() => setCountNew(props.initialCount)}>Reset</button>
      <button onClick={() => setCountNew(prevCount =>
 
        prevCount - 1)}>-</button>
      <button onClick={() => setCountNew(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
