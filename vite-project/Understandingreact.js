// REACT
// Open Source library for building user interfaces
//  Not a framework
// Focus on UI (Not on router or http requests)
// Used with other libraries to render to certain environments.
// eg: // React native => mobile application

import { Component } from "react";

// How react maintains the router and http Requests -;
// React has a rich ecosystem
// integrate easily with other libraries

// WHY LEARN REACT(Why it is used in Modern Web Development) -;
// created and maintained by Facebook
// Component based architecture  (let us break down an application into small encapsulated parts and used to compose more complex UI)
// Reusable Code (it is good for enterprise applications) (eg:code for article component of react can be reused for article component of angular and vue)
// React is declarative => tell react what the UI should looks like and React will build the actual UI.
// React will handle efficiently updating and rendering of the components when data changes.
// DOM updates also handled efficiently in react => Uses Virtual DOM to update only the parts of the UI that actually changes instead of reloading the whole page.
// Can easily integrate react into any application.
// It is scalable

// PRIMARY GOAL OF REACT -;
// Minimize the bugs that occur when developers are building UIs.
// It does this through components => Self-contained logical pieces of code that describe a portion of the User Interface.

// React does not enforce rules on code conventions and file organization

// DIFFERENCE BETWEEN SPA(Single Page Application) & MPA(Multi-Page Application)

// SINGLE PAGE APPLICATION
// Web App that loads a single HTML page once and dynamically updates contents without refreshing the whole page.
// (Use one single template and modify all the contents within it)
// eg:Gmail,twitter,facebook...

// FEATURES
// loads once -> Most resources(HTML,CSS, JS) loads initially
// Fast Navigation -> Only the changed data is fetched from the server, not the whole page.
// Uses client-side routing -> Instead of server decides what page to show,Js(React Router, Vue router) handles page changes inside the browser.
// Better UX(user Experience)
// SEO(Search-Engine Optimization) can be tricky -> Since content is created dynamically,search engine may have trouble indexing.

// MULTI-PAGE APPLICATION
// Traditional websites where each new page reloads fully from the server
// eg: Amazon, Flipkart

// FEATURES
// Full reload -> Each link loads a new HTML page from the server.
// Slow navigation ->Every page requires a fresh requests to the server + reloading HTML, CSS, JS, images
// Server- side routing -> Server decides which page to send when you go to a URL.
// Better SEO-> Each page has its own Unique HTML

// COMPONENTS AS BUILDING BLOCKS OF REACT

// Components are basic building blocks of React apps.
// Create small, reusable parts and combine them to build complex UIs.
// Components can contain other components.
// A component is comprised of multiple other small components.
// In the newwer Version a component should have a .jsx extension
// Name of the component should start with Capital Letter.

// FEATURES
// Reusability => write once, use in many places
// Maintainability => If something breaks, fix it in one place,and updates everywhere.
// Modularity => Breaks a big app into small, manageable parts.

// TYPES OF COMPONENTS -;
// 1) Functional Components -; functions that return JSX(UI).
// React components are JS functions that return markup:
function MyButton() {
  return <button>I am a button</button>;
}
// 2) Class Components
// Regular ES6 class that extends Component Class from react library
// contains render method that return HTML

// INTRODUCTION TO JSX
// Syntactic sugar for calling React.createElement
// Extension to the JavaScript language syntax.  => allows to combine HTML and JavaScript.
// To use JS in JSX use {}
// JSX => JavaScript XML --> HTML-like code inside JavaScript.
// In JSX, curly braces are used to embed JavaScript code inside HTML-like syntax. (Don't use quotes inside braces).
const element = <h1>Hello, React!</h1>;
// In JSX -;
// close tags like <br/>
// JSX tags have a tag name, attributes, and children
// Can't return multiple JSX tags. Wrap them in a <div>....</div> or an empty <>....</>
// parenthesis to show that multiple lines of code are part of same expression
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br />
        How do you do?
      </p>
    </>
  );
}

// BASIC JSX EXAMPLE
const elements = <h1>Hello, React</h1>; //<h1> looks like HTML, but it's JSX
// React will convert to React.createElement('h1', null,'Hello, React!')

// JSX with Fragment
const frag = (
  <>
    <h2>Title</h2>
    <p>This is inside a Fragment</p>
  </>
);

// JSX with variables
const name = "Harry";
const vari = <h1>Hello, {name}!</h1>;
// {name} is a JS expression inside JSX.React replaces the {name} with the value of the variable.

// JSX with Expressions
// Can do math or any JS expression inside {}.
const a = 5;
const b = 10;
const exp = (
  <p>
    {a} + {b} = {a + b}
  </p>
);

// JSX with Attributes
const attri = <img src="sample.png" alt="sample" />;
// JSX uses camelCase for attributes (className,onClick)
// React converts these to actual HTML attributes when rendering.

// JSX with Conditional Rendering
const isLoggedIn = true;
const check = <h1>{isLoggedIn ? "Welcome Back" : "Please Log In"}</h1>;

// JSX must have a Single Parent
// const parent = <h1>Hello</h1><p>Welcome</p>;   // Not possible

const SingleParent = (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);

// JSX with Functions
function greet(name) {
  return "Hello" + name + "!";
}
const res = <h1>{greet("Harry")}</h1>;
// JSX with inline Styles
const styleObj = { color: "blue", fontSize: "20px" };
const final = <p style={styleObj}>Styled with JSX</p>;

// JSX with Components
// 1)
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const hello = <Welcome name="Harry" />;
// here <Welcome /> is a component. and name('Harry') passed as props.

// 2)
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
function App() {
  return (
    <div>
      <Greeting name="Harry" />
      <Greeting name="React Learner" />
    </div>
  );
}

// JSX with Event Handling
function App() {
  function handleClick() {
    alert("Button was clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

// Example With JSX and Without JSX
// With JSX
const helloo = () => {
  return (
    <div className="dummyClass">
      <h1>Hello Harry</h1>
    </div>
  );
};
// Without JSX
return React.createElement(
  "div",
  { id: "hello", className: "dummyClass" }, //null,   //second parameter -; Object of key-value pair that will be applying to the element.
  React.createElement("h1", null, "Hello Harry")
);

// JSX translates into React.createElement which in turn uses the React library
// Differences in JSX
// class -> className
// for -> htmlFor
// camelCase  (onclick => onClick)

// More examples
function Header() {
  return <h1>My Website</h1>;
}
function Button() {
  return <button>Click Me</button>;
}
function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}
// Here 'Header' and 'Button' are small components, combined inside 'App'.

//
const message = "Learning React is fun!";
const el = <h2>{message}</h2>;

const c = 7,
  d = 3;
const test = (
  <p>
    {a} * {b} = {a * b}
  </p>
);

// JSX with Lists(Rendering Arrays)
const fruits = ["Apple", "Banana", "Orange"];
const list = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);


// MDN -;

const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
// When compiled,using Babel/Parcel expression will be -;
const headerC = React.createElement(
  "header",
   null,
   React.createElement("h1",null,"Mozilla Developer Network"));

// Each React component is a JS function.
// JSX =>syntax extension           React => JavaScript Library.
// Rules of JSX 


///////////////////////////////// 1)RETURN A SINGLE ROOT ELEMENT  //////////////////////////////////////////////////////////////////////

// To return multiple elements from a component, wrap them with a single parent tag.


// HTML
{/* <div>
  <h1>Hedy</h1>
  <img src="https://sample.png" alt = "hedy" class="img">
  <ul>

  </ul>
</div> */}

// JSX
<>
<h1>hedy</h1>
<img src="https://sample.png" alt = "hedy" className="img" />

<ul>

</ul>
</>
// The empty tag is called 'Fragment'.

// WHy do multiple JSX needs to be wrapped ?
// Actually JSX is transformed into plain JS object.Can't return 2 objects from a function without wrapping them into an array .

//////////////////////////////////////////////////////// 2) CLOSE ALL THE TAGS ////////////////////////////////////////////////////////////
// JSX requires to be explicitly closed: 
// self closing tags like <img> must becom <img />, 
// wrapping tags like <li>Oranges must be written as <li>Oranges</li>

// 3)/////////////////////////////////////CAMELCASE ALL MOST OF THE THINGS ////////////////////////////////////////////////////////////////////
// JSX turns into Js and attributes in it becomes keys of JS objects.
// JS has limitations on variable names.eg: their name can't contain dashes or be reserved words like class , So
// In React many HTML and SVG attributes are written in camelCase. [stroke-width : strokeWidth, class : className(as class is reserved)]

// eg: 

export default function TodoList(){
  return(
    <>
    <h1>Hedy Lammar</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" className="photo"/>
        <ul>
          <li>Invent nre wejhf jhbwgef</li>
          <li>Reherse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
    </>
  );
}

// CHALLENGE
export default function Bio(){
  return(
    <div>
    <div className="intro">
      <h1>Welcome to my thoughts here.</h1>
      </div>
      <p className="summary">You can find my thoughts here. <br/> <br />
      <b>And <i>Pictures </i></b>of scientists!</p>
    </div>
  );
}