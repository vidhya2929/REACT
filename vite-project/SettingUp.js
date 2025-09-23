
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



// FUNCTIONAL COMPONENT 
// JavaScript Functions that accept an object of props(properties) as an argument and return a React element(JSX).
// No 'this' keyword
// // create components folder in src
// Once we have created or defined a component use that component inside the main component which is the app.jsx component
// Any component we make , make sure to export and  import it where ever needed
// For component file name convention we use Pascal case
// In the file  => import React


// 1)Greet.js
// export the Greet function from the Greet.js  =>
  // export default allow us to import the component with any name.
// Import it in App.js
// Include it in the App component
// eg: 
import React from 'react';
const Greeting = (props) => {
  return (
    <h1>Hello, {props.name}!</h1>
  );
};
export default Greeting;


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



// Importing and using components

