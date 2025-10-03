// if else
////  if don't want to render anything at all , A component must return something, Then we can return null:
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
// Conditional(ternary) operator
return <li>{isPacked ? name + "✅" : name}</li>;

// Logical AND operator (&&) [short-circuiting evaluation]
// render some JSX when the condition is true, or render nothing.
return (
  <li className="item">
    {name} {isPacked && "✅"}{" "}
    {/*If isPacked, then (&&)render the checkmark, otherwise, render nothing*/}
  </li>
);
// A Js && expression returns the value of it's right side if the left side is true.
//                                                       PITFALL
//  Js converts the left side to a boolean if left side is 0 then it will render 0 rather than nothing

// Conditionally assigning JSX to a variable
let itemContent = name;
if (isPacked) {
  itemContent = name + "✅";
}

// RENDERING LISTS
// Filter() & Map() with REACT to filter and transform array into an array of components.
// map()
// generating a list of items from an array:
const people = [
  "Creola jdnfhv: fjhucvdfs",
  "Breola jdnfhv: fjhucvdfs",
  "Dreola jdnfhv: fjhucvdfs",
  "Freola jdnfhv: fjhucvdfs",
  "Hreola jdnfhv: fjhucvdfs",
  "Mreola jdnfhv: fjhucvdfs",
];
// Map the people members into a new array of JSX nodes, listItems:
const listItems = people.map(person => <li>{person}</li>);
// Returning listItems from the component wrapped in a <ul>
return <ul>{listItems}</ul>

// filter()
const peol = [{
  id: 0,
  name: "Johnson",
  profession:'mathematician',
},{
  id: 1,
  name:"Mario",
  profession: "chemist",
},
{
  id: 2,
  name: "Salam",
  profession:"physicist",
},
{
  id: 3,
  name: "Percy",
  profession:"chemist",
}];
// Items where the profession is 'chemist'
// creates a new array of 'chemist
const chemists = peol.filter(person => person.profession === 'chemist');
// Map over chemists
const listIt = chemists.map(person => 
  <li>
    <p>
      <b>{person.name}:</b>{''+person.profession + ''}
    </p>
  </li>
);
// returning listItems
return <ul>{listItems}</ul>

//                                             PITFALL
// Arrow functions implicitly return the expression right after =>, so don't need a return statement.
// must write return if => is followed by a { brace. Arrow fn having =>{ have more than single line of code, then use return, otherwise nothing gets returned.

// Keeping list items in order with "Key"
// JSX elements directly inside a map() call always needs keys!
// It tells React which array item each component corresponds to
// It helps React to make the correct updates to the DOM tree.

// The short <>.....</> fragment syntax won't let to pass a key, so group them into a single <div> or use slightly longer and more explicit <Fragment> syntax:

import {Fragment, useEffect} from 'react';

const listy = people.map(person => 
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
)

// Keys must be unique among siblings
// keys must not change

//                     PITFALL
// Don't use index(if an item inserted, deleted, or array get reordered), Date.now(),Math,random() as key because get subtle and confusing bugs.
// Components won't receive key as a 'prop'. (if component needs an ID, pass it as a seperate prop)
{/* <Profile key={id} userId = {id}/> */}


// Render a list of fruits
const fruits = ["Apple", "Banana", "Orange","Mango"];
// Render them as <li> inside a <ul> using map().(want unique key also)
const listFruits = fruits.map(fruit => 
  <li key={fruit}>{fruit}</li>
);
return <ul>
{listFruits}
</ul>

// Number list
const numbers = [1,2,3,4,5];
// Render inside <p> tags.
// Add the word "Even" or "Odd" beside each number(conditional rendering)
 {numbers.map(num =>
  <p key={num}>{num} is {num % 2 ==0 ? "even": "odd"}</p>
)};

// User login check
const isLoggedIn = true;
// if statement
let message;
if(isLoggedIn){
  message = "Welcome back, User!";
}
else{
  message="Please log in."
}
return <h2>{message}</h2>

// Ternary Operator
{isLoggedIn ? "Welcome back, User!": "Please log in"}
// Logical &&
{isLoggedIn && "Welcome back, User"}
{!isLoggedIn && "Please log in"}

// Product Availability
const products = [
  {id: 1, name:"Laptop",available:true},
  {id: 2, name: "phone", available: false},
  {id:3, name:"Tablet", available:true}
];
<ul>
 {products.map(product => 
  <li key={product.id}>{product.name} {product.available ? "✅ Available":"❌ Out of Stock"}</li>
)}
</ul>

// Different UI states
// Loading and Empty State

// Loading -> Data is being fetched.
// Error ->Something went wrong while fetching
// Empty -> Data fetched successfully but there is nothing to show 
// Success -> Data is available and should be displayed

// Example 
// UIStates.jsx, ApiState.jsx


// Form
// built- in browser <form> component lets you create interactive controls foe submitting information.

// <form action={search}>
//   <input name=query/>
{/* <button type=submit>Search</button> */}
// <form />

// <form> supports a;; common element props.
// Pass a  function to the action prop of form to run the function when the form is submitted.
// action: a URL or a function.

// Whenever we click a button inside the form the form get submitted

// Display a pending state during form submission => useFormStatus
// pending property returned.


// Handling Forms with Controlled Components(Text Inputs)
// A controlled component in React is when the form's input value is controlled by React State. =>>
// 1) The value of an input comes from the state.
// 2) The onChange event updates the state.

// Controlled checkboxes
// Instead of value, we control checkbox using checled property
// In onChange, e.target.checked













// UseEffect  =>(fetching data from an API, working with timers, directly updating the DOM)
// callback fn runs after the component renders
// the cleanup function runs when the component unmounts OR before re-running the effect

// No dependency array =>> runs after every render and re-render
// []  ==>> Runs only once when the component mounts
// [count](with dependencies) ==> runs only when a specific state/prop changes.

// The function returned from useEffect is used for cleanup.(eg: removing event listeners, clearing timers, cancelling API requests)

useEffect(() => {
  //effect logic here
  return () => {
    // cleanup (optional)
  };
}, [dependencies])

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);
  return() => {
    clearInterval(timer);
    console.log("Timer cleared");
  };
}, []);


// Passing Functions as Props 

// In react, data usually flows downward(Parent -> Child) via props.
// Sometimes , the child needs to trigger changes in the  parent.
// To achieve it, The parent defines a function and passes it to the child as a prop.
function Parent(){
  function sayHello(){   //function that parent defines
    console.log("Hello from Parent!");
  }
  return <Child onGreet={sayHello} /> 
}
function Child({onGreet}){
  return <button onClick={onGreet}>Greet</button>;
}

// Child cannot directly modify parent's state.
// But child can call a function(from props) -> parent handles the update

// Lifting State Up 
// In React, state is local to a component.
// When 2 or more components need to share the same state, Instead of duplicating the same state in multiple places,-;
// Move the state up to the closest common parent
// pass the state and the functions to update it down as props.  ==>>........... LIFTING STATE UP.


// MOVING STATE TO THE CLOSEST COMMON PARENT SO MULTIPLE CHILDREN CAN SHARE IT(state) THROUGH PROPS 
// eg: InputBox.jsx  ,  DisplayBox.jsx  , Parent.jsx







// ARRAY METHODS IN REACT(Map, filter, reduce)

//. map() => Rendering Lists
// used it to render multiple components from data
const fruit = ["Apple", "Banana", "Mango"];
export default function FruitList(){
  return(
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  )
}

// USECASE =; Render lists dynamically from arrays of objects, like posts,products, or users

// .filter() => Creating Subsets
// returns a new array containing elements that satisfies a condition

const nums = [1,2,3,4,5,6];
export default function EvenNumbers(){
  const evens = nums.filter((num) => num % 2 === 0);

  return(
    <ul>
      {evens.map((num)=>(
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}

// USECASE =; Filter lists based on search, categoty, or user selection.

// .reduce() => Aggregate Values
// reduces an array to a single value

const numbs = [10,20,30,40];
export default function SumNumbers(){
  const total = numbs.reduce((acc, curr) => acc+curr,0);
  return <p>Total sum: {total}</p>
}