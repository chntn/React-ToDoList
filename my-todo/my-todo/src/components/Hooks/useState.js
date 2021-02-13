
import React, { useState } from 'react';


export default function CounterComp(props) {

  console.log(props.initialCount);
  const [countNew, setCountNew] = useState(props.initialCount);

  //SECOND WAY
  function myfunction() {

    for (let i = 0; i < 5; i++) {
       console.log("i",i,countNew);
      setCountNew(prevCount => prevCount  - 1);

    }
  }



  return (
    <>

      <br />Use State Count: {countNew}
      <br />
      <button onClick={() => setCountNew(props.initialCount)}>Reset</button>
      <button onClick={myfunction}>-</button>
      {/* FIRST WAY */}
      <button onClick={() => setCountNew(prevCount => prevCount + 1)}>+</button>
      <br />
     </>
  );
}
