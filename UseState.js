// useState => React Hook => create a state variable to a component
const [state, setState] = useState(initialState);

// Call useState at the top level of component to declare a state variable

import { useState } from "react";

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState("Taylor");
}

// initialState: The value you want the state to be initially.(of any type).[This argument is ignored after the initial render]
// Can only call it at the top level of the component and  or our own HOoks.
// Can't call it inside loops or conditions.

// Can pass  next state directly, or a function that calculates it from the previous state:

const [name, setName] = useState("Edward");

function handleClick() {
  setName("Taylor");
  setAge((a) => a + 1);
}
// Set functions do not have a return value.
// The set function only updates the state variable for the next render.

// useState returns an array with exactly two items:
// 1) The current state of this state variable, initially set to the initial state
// 2) The set function that lets change it to any other value in response to interaction.

// To update what on the screen, call the 'set' function with some next state:
function handleClick() {
  setName("Robin");
  console.log(name); //Still Taylor
}
// calling the 'set' function does not change the current state in the already executing code:
