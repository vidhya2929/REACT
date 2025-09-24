
// [Requirements ==>> node and a text editor

//OLD VERSION NOT NEEDED 

// Creating a new React project using Create React App
// create React App =>  Command Line Interface Tool -> allows to quickly create and run React Applications with no configuration.
// First method of Create React App -> npx
// (1)  Terminal -> npx create-react-app (name of the project) hello-world 
// (2)  To run the application -> navigate inside the project folder
// (3)  Run -> npm start 

// 'npx' is an 'npm package runner' which get installed when we install 'node'

// Second method of Create React   -> npm
// Install the create React app package globally and use the package to generate projects    
// Command for Installing Globally -;
// npm install create-react-app -g
// create-react-app  <project_name>  //needs to be constantly updated]

// NEW VERSION
//VSCODE -version
// Vite App
// 1) npm create vite@latest
// cd vite-project(project-name)
//   npm install
//   npm run dev 

// react app is called as "SPA" -> SIngle Page Application (It only has 1 html page)
//  <div id="root"></div> it is controlled by main.jsx
 
// STRUCTURE OF A GENERATED PROJECT

// main.jsx => starting point of application.Main file which actually selects the root element from  HTML and renders a react component in it.
// Package.json => It contains the dependencies(modules which are application is currently running) and the scripts required for the project.
// Node modules =>All the dependencies are installed here (generated when the create-react-app command or npm install command is run)
// Public Folder => 3 files =>1) manifest.json(concerned with progressive web apps)
//                            2) index.html (only html file in the project,& not going to make any changes except some changes in the head tag.)
//                               [Most IM top=level file].
//                               Have 1 div tag with the id="root" at runtime.(react take this and responsible for the UI)
// src Folder => work with it during development
// index.js =>specify the root component(which is app component) & DOM component which is controlled by react
// App.jsx => responsible for the HTML displayed in the browser. main component of the application
// vite.config.js => Used for running up the particular vite app
// gitignore => contains file we need to ignored whenever we will bw pushing our code to the git repository

// REASONS FOR USING COMPONENTS -;

//1)  Modularity -; Each component acts like a module and it provides a specific UI functionality.
//2)  Easy to manage
//3) Reusable -; Once a component is created, we can reuse it anywhere in our code
//4) Testing -; As components are isolated from one another they could be tested really well and can ensure every single component works well.
// 5) Abstraction 


// FUNCTIONAL COMPONENT 

// JavaScript Functions that accept an object of props(properties) as an argument and return a React element(JSX).
// No 'this' keyword
// // create components folder in src
// Once we have created or defined a component use that component inside the main component which is the app.jsx component
// Any component we make , make sure to export and  import it where ever needed
// For component file name convention we use Pascal case
// In the file  => import React


// export the Greet function from the Greet.js  =>
  // export default allow us to import the component with any name.
// Import it in App.js
// Include it in the App component
// eg: 
import React from 'react';
import Hello from './src/components/Hello';
const Greeting = (props) => {
  return (
    <h1>Hello, {props.name}!</h1>
  );
};
// export default Greeting;


// 2)

function Welcome(){
  return <h1>Hello, React!</h1>;
}
// export default Welcome;

// Props are used to pass data from a parent component to a child component.

// RETURNING JSX from a Component
// JSX => HTML - like syntax inside JavaScript
// JSX elements can have attributes 




function App(){
  const name = "Harry";
  return(
    <div>
      <h2>Welcome, {name}!</h2>
      <P>This is my first React App</P>
      <button type= "button" className='primary'>CLick Me!</button>
    </div>
  );
}
// // MDN -;
return(
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
)

// If our markup isn't all on the same line as the return keyword, then wrap it in a pair of parenthesis ().
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
)

// Without Parenthesis, any code on the line after return will be ignored.

// A component can be nested inside another component.
// 
// A React component is a JavaScript function that you can sprinkle with markup.

//1)//////////////////////////////////////////////// EXPORT THE COMPONENT /////////////////////////////////////////////////////////////
// 'export default ' prefix is a std JS syntax (can import it later to other files)

// 2) ////////////////////////////////////////////////DEFINE THE FUNCTION //////////////////////////////////////////////////////////////
//  function Profile(){
// }
// React components are regular Js functions , but their name must start with a capital letter.

// 3) ///////////////////////////////////////////////////////ADD MARKUP ////////////////////////////////////////////////////////////////
// JSX => let us to embed markup inside JavaScript

function Profile(){
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"/>
  );
}


// export default function Gallery()
{
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );
}
// here Gallery Component uses multiple Profile components.
// Gallery is a parent component, profile is a child component.
// <section> => lowercase , React knows it is an HTML tag.
// <Profile /> starts with a capital P, React knows use component called Profile.

// Can keep multiple components in the same file.


// export default function Gallery(){
//   // never define a component inside another component
//   function Profile(){
//   //......................
//   }
//   //.............................
// }

// define every component at the top level
export default function Gallery(){
  //..............................
}

function Profile(){
// ...............................
}
// When a child component needs some data froma a parent , pass it by props instead of nesting

// Importing and Exporting Components
// 1) Make a new JS file to put the components in.
// 2) Export your function component from that file(default / named exports)
// 3) Import it in the file where we use the component
// import Gallery from './Gallery' /'./Gallery.js' both work

// Named & Default Exports
// A file can have no more than one default exports
// Can have many named exports.

// Default           => export default function Button(){}                 => import Button from './Button.js'; (Can give any name after import)
// Named             => export function Button(){}                         =>import { Button } from './Button.js'; (Name has to be matched on both sides)

//JAVASCRIPT IN JSX with CURLY BRACES
// To add JavaScript logic or reference a dynamic property inside that markup ==>> use curly braces {}

// Passing Strings with quotes

export default function Avatar()
{
  return (
    <img className='avatar'
    src = "https://i.imgur.com/7vQD0fPs.jpg"
    alt="Gregorio Y. Zara" />
  );
}
// To dynamically specify the src and alt
export default function Avatar(){
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return(
    <img className="Avatar" src = {Avatar} alt={description}/>
  );
}
// Any Js expression will work between curly braces, including function calls like formatdate();
// Where to use {}
// 1) text directly inside JSX tag  :  <h1>{name}'s To do List</h1>
//  2)Attribute immediately following = sign : src = {avatar}  will read avatar variable , but src = "{avatar}".


// Objects can also be pass in JSX
// As object are also denoted with curly braces, to pass a JS object in JSX, wrap the object in another pair of curly brace.
// When need an inline style in JSX then pass an object to the style attribute.



