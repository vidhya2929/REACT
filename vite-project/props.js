// Making a Component 'Dynamic' using 'props'
// props / properties -;
// Values passed to the components to make those components Dynamic
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




