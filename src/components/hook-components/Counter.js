import React, { useState } from "react";

const Counter = () => {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);


  const [name, setName] = useState({ firstName: "", lastName: " " });
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div>
        {" "}
        Count: {counter}
        <button onClick={() => setCounter(initialCount)}>reset</button>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          increment
        </button>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
          decrement
        </button>
        <button onClick={incrementFive}>incrementFive</button>
      </div>



      <form>
        <input 
        type="text"
         value={name.firstName} 
         onChange={(e)=> setName({ ...name, firstName: e.target.value})} />
        <input 
        type="text" 
        value={name.lastName} 
        onChange={(e)=> setName({ ...name, lastName: e.target.value})} />
       
        <h2>Your name is {name.firstName}</h2>
        <h2>Your surname is {name.lastName}</h2>
      </form>
    </div>
  );
};

export default Counter
