import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count : ${count} ${color}`;
  });
  //  useEffect(()=> {
  //   document.title = `Count : ${count}`;
  // },[])        One time change

  // useEffect(()=> {
  //   document.title = `Count : ${count}`;
  // },[count,color])

  function addCount() {
    setCount((c) => c + 1);
  }
  function subCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br></br>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
export default EffectHook;
