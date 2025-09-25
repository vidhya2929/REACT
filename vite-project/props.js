// Making a Component 'Dynamic' using 'props'
// props / properties -;  read-only components that are shared between components.
// Values passed to the components to make those components Dynamic.
// A parent component can send data to a child component
// A component within a parent can send that child component key value pairs
// refer ; DynamicHello.jsx

// Destructuring props in React

// DynamicHello.jsx

const { name, message } = props; //also in the function declaration
<h1>
  {message}
  {name}
</h1>;

// Immutability of Props
// Props which we are pass to one component to another component are actually immutable.
// we can only mutate the props is when we pass the props to components.
// Can pass any kind of data to the props
function Hello(props) {
  props.name = "Jake";
  return (
    <div>
      <h1>
        {props.message} {props.name}
      </h1>
    </div>
  );
}

// Passing an array to a Prop

// ===>>> ArrayProp.jsx
const seatNumbers = [1, 4, 7];

<div className="App">
  <ArrayProp name="Ron" message="Hi there!" seatNumbers={seatNumbers} />
</div>;

// Passing Object to prop

// ===>>> ObjectProp.jsx
const person = {
  name: "Rob",
  message: "Hi there!",
  seatNumbers: [1, 4, 7],
};

{
  /* <fileName person={person} /> */
}

return (
  <div>
    {props.person.message} {props.person.name}
    {props.person.seatNumbers}
  </div>
);

// PASSING PROPS TO A COMPONENT
// React components use props to communicate with each other.
//  parent component can pass  information to child component by giving them props.
// PROPS => Information that pass to a JSX tag.  eg: className, src, alt, width...

export default function Profile(){
  return (
    <Avatar />
  );
}
// Giving Avatar some props in two steps
export default function Profile(){
  return(
    <Avatar person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
    size={100}/>
  );
}
// Read props inside the child component
// list the names seperated by comma inside ({ and }) directly after (function functionName )

function Avatar({person, size}){
  //.......................
}
// This syntax is called destructuring 
function Avatar(props){
  let person = props.person;
  let size = props.size;
}

// Specifying a default value for a prop
// Give default value to a prop, when no value is specified by oding 'destructuring' by putting = and the default value right after the parameter
function Avatar({person,size=100}){

}
// if <Avatr person = {...} rendered with no size prop, the size will be set to 100.
// default value is used only if prop is missing or size={undefined}, Not when  size={null} or size={0}

// Forwarding prpos with the JSX spread syntax
function Profile({person, size, isSepia, thickBorder}){
  return (
    <div className='card'>
      <Avatar 
      person={person}
      size = {size}
      isSepia = {isSepia}
      thickBorder = {thickBorder}
      />
    </div>
  );
}
// DRY
// console.log();
function Profile(props){
  return(
    <div className='card'>
      <Avatar {...props}/>
    </div>
  );
}

//  Using special children prop to compose components
// Understanding Children
// In react, every component can receive props.
// 'children' prop automatically contains whatever is nested inside a component's tags.
// eg:
<MyComponent>
  <p>This is a child element</p>
  <button>Click Me</button>
</MyComponent>
// here, the nested elements can be accessed via props.children:
function MyComponent(props){
  return <div>{props.children}</div>;
}
// <p> and <button> are children
// children can be any valid JSX:button, another component,text, or even a full layout.

import React from "react";
  function Wrapper({children}){
    return(
      <div style={{border: "2px solid #007BFF", padding:"20px",borderRadius:"10px"}}>
        {children}
      </div>
    );
  }
  // export default Wrapper;

  import React from "react";
  import Wrapper from "./Wrapper";
  function App(){
    return (
      <div>
        <Wrapper>
          <p>This ia inside the Wrapper Content.</p>
        </Wrapper>
        <Wrapper>
          <button onClick={()=> alert("Button clicked!")}>Click Me</button>
        </Wrapper>

        <Wrapper>
          <h2>Title inside Wrapper</h2>
          <p>Description inside wrapper</p>
          <button onClick={() => alert("Multiple elements!")}>Action</button>
        </Wrapper>
      </div>
    )
  }
  // export default App;

  // task -; Card.js


  // Rendering List of Arrays in React Component
  // map() -; helps to loop through JavaScript
  // Fruits.jsx

  // Use the map function to loop through every single element of the array.

  // Rendering Array of Objects in React
  // Objfruit.jsx
  

  // Rendering Components Inside a Loop
  // FRuit.jsx


  // Fruits => parent component
  // fruit => child component
  

  // Conditionally  Rendering JSX and Components
  