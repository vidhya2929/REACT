import { useState } from "react"

function Counter(){
  const[count,setCount] = useState(0);   //state variable = count    // here we can set the initial value of the variable
  // // Zero(0) can be passed as a value, sets the count varible to 0 at the initial position
  const[incrementBy, setIncrementBy] = useState(1);


  // The state of a component should be declared at the top of the component
  function increment(){
    setCount(count + incrementBy);
  }
  function decrement(){
    setCount(count - incrementBy);
  }
  function increaseIncrement(){
    setIncrementBy(incrementBy + 1)
  }
  function decreaseIncrement(){
    setIncrementBy(incrementBy - 1)
  }
  return(
    <div>
     <h1>Count value is: {count}</h1> 
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>

     <h1>We are incrementing the value by: {incrementBy}</h1>
     <button onClick={increaseIncrement}>Increase Increment</button>
          <button onClick={decreaseIncrement}>Decrease Increment</button>

    </div>
  )
}
export default Counter

// To create a state variable in React use ==>> useState hook
// It is created where we write the JS code
// const array = [] => define 2 things inside it => 1)state variable, 2) create a function which can change the value of the state variable


// When refreshing, the value become zero=; because when the page is reload, the useState hook would be executed and it set the value of count to be zero.





// State is like a component's memory
// create a state variable => A piece of State combined together to form a component state
//  A single component can hold multiple pieces of data , which are called as state variables. these multiple pieces of state variables combined together to form the entire state of the component
// whenever the state's value get changes , causes the components to re-render