// import Home from "./Pages/Home";

// const App = () =>{

//   return (
//     <>
//     <Home/>
//     </>
    
//   )
// }
// export default App;

import { useState } from "react";

const App = () => {
  const [counter , setCounter] = useState(0);

  const incrment = () =>{
    setCounter(counter +1)
  }
  const deIncrment = () =>{
    setCounter(counter -1)
  }
  const reset = () =>{
    setCounter(0)
  }

return (
<>
  <div>
    <h1>Counter : {counter}</h1> <br />
    <button onClick = {incrment}>Incrment</button>
    <button onClick = {deIncrment}>Decrment</button>
    <button onClick = {reset}>Reset</button>
  </div>
</>
)
}
export default App;