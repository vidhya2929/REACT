import { useState } from "react";
import ChildButton from "./ChildButton";
export default function CounterPC(){
  const [count, setCount] = useState(0);  // state is in the parent

  function increment(){
    setCount(count + 1);
  }
  return(
    <div className="p-6 text-center">
      <h1>Parent-Child Counter</h1>
      <p>Count: {count}</p>
      <ChildButton onIncrement={increment}/>  {/*Pass increment function as prop*/}
    </div>
  );
}

