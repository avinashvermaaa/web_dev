import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> count : {count} </p>
      <button onClick={()=> setCount(count + 1)}> Increment </button>
    </div>

  );
}

function App(){
  return (
    <div>
      
      <h1>Hello, Avinash</h1>
      <Counter />
      
    </div>
  );
}

export default App;