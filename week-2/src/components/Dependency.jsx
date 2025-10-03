import { use } from "react";
import { useState, useEffect } from "react";

export default function EffectDemo(){
  const[count, setCount] = useState(0)

  useEffect(() => {
    console.log("Effect runs after every render");
  });
  useEffect(() => {
    console.log("Effect runs once when component mounts")
  },[]);

  useEffect(() => {
    console.log("Effect runs when count changes",count);
  },[count]);
  return(
    <div classname="p-6 text-center">
      <h1 classname="text-xl font-bold">useEffect Dependency Experiment</h1>
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
      >
        Increment
      </button>
    </div>
  );
}