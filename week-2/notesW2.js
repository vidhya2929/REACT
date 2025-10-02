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

import {Fragment} from 'react';

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
