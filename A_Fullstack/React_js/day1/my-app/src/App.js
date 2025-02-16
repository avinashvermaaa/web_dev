import react, { useState } from 'react'
import Welcome from './Welcome.js'
// inbuilt {useState that's why can't change name of function}
function Counter(){
  const [Current_Count,Increment_Count] = useState(0);
  return (
    <div>
      <p>Count : {Current_Count}</p>
      <button onClick={() => Increment_Count(Current_Count + 1)}>Increment</button>
    </div>
  );
}

function app() {
  return(
    <div>
  
      <Welcome name = "Avinash" />
      <Counter />
    </div>
  );

}


export default app;