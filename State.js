// State
// props are immutable
//[ State in React is an object which going to hold the data related to a specific component.
// Value of state could be dynamically changed throughout the life cycle of the a component]

// STATE => Object that holds information to control behaviour of a component.

// Props v / s State
// Props are passed to the component
// State is contained inside the component.
// props are immutable.
// State can be changed.Influence the behaviour of a component
// props are like parameters passed to a function
// State is like a variable declared in function body.


// useState

// UseState is a hook which allows us to create a state variable count and a function which will set the value of count
// Counter.jsx


// Multiple States in React
// Counter.jsx => incrementBy

// Handling Input Fields in React 
// ====>>> Form.jsx
// In react we cannot directly change the value of the input field  -> to change it use the attribute 'onChange'

//Handling Multiple Inputs In Js






// MDN =>>


// A Components Memory
// In React component- Specific memory is called state

// 2 reasons for preventing change
// 1) Local variables don't persist between renders.
// 2) Changes to local variables won't trigger renders.

// To update a component with new data, 2 things need to happen
// 1)Retain the data between renders
// 2) Trigger React to render the component with new data(re-rendering).


// Adding a state Variable
// To add a state variable, import useState from React at the top of the file:

import { useState } from 'react';
const [inde, setInde] = useState(0);  // index is a state variable, setIndex is the setter function.

// [ and ] is called array destructuring (to read values from an array). The array returned by useState always has 2 items.
function handleClick(){
  setIndex(index + 1);
}

// In React, useState, as well as any other function starting with "use", is called a HOOK.
// HOOK => Hooks are special functions that are only available while React is rendering
// Hooks are only be called at the top level of your components or our own Hooks.{can't call inside conditions,loops, or nested functions}

// When we call 'useState', telling React that you want this component to remember something

// const[something, setSomething] 
// Only argument to useState is the initial value of your state variable.

const[index, setIndex] = useState(0);
// component renders first time -; as 0 is the initial value , [0,setIndex] is returned. React remembers 0 is the latest value.
// Update the state. When user clicks the button, it calls setIndex(index + 1). index is 0, setIndex[1]. Reat remembers index is now 1 and triggers another render.
// Second render -; React sees useState(0) -; as React remembers that index is set to 1, it returns [1,setIndex] instead. 

// State is isolated and private
// if render same component twice, each copy will have completely isolated state.Changing one of them will not affect the other.

// State is fully provate to the component declaring it.

