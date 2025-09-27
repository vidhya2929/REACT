// UseState Hook -;
// A way to manage state(data that changes over time) in a functional component.
// The list of todos, their "completed " status, etc.. are all stateful values.



// Syntax :
const[state, setState] = useState(initialValue);

// Counter App
import { useState } from "react";
export default function Counter(){
  const[count, setCount] = useState(0);

  return (
    <div>
      <p>
        You CLicked {count} times
      </p>
      <button> onClick={() => setCount(count + 1)}Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

// useEffect Hook
// Lets run side effects
// Fetch todos from the API when the app first loads.
// Syntax 
useEffect(() => {

},[dependencies]);

// ===> Fetching Users:

// Components 
// Small, reusable building blocks of UI.
// Syntax :
function ComponentName(props){
  return <div>{props.something}</div>
}

// Props
// Inputs to .Like function arguments
// Syntax: 
<Child propName = {value}/>


// map() ->render a list of tasks
// filter() -> remove a task
// spread operator -> add new task
// find() / findIndex()  -> locate a specific task

export default function ShoppingCart() {
  const [cart, setCart] = useState(["Apples", "Bananas"]);

  function addItem() {
    setCart([...cart, "Oranges"]);
  }

  function removeItem(item) {
    setCart(cart.filter((i) => i !== item));
  }

  return (
    <div>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(item)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Oranges</button>
    </div>
  );
}

import {useState} from "react";
export default function Counter(){
  const[count, setCount] = useState(10);

  return(
    <div>
      <p>You clicked{count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase()</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function Greeting({name,age}){
  return <h2>Hello {name}({age} years old)</h2>
}
export default function App(){
  return(
    <div>
      <greeting name="harry"/>
       <greeting name="Ailce"/>
        <greeting name="Lilly"/>
         <greeting name="Potter" age={28}/>
    </div>
  )
}
function Greeting({name, onClick}){
  return <button onClick={onClick}>Hello {name}</button>;
}
export default function App(){
  function sayHi(){
    alert("Hi there!")
  }
  return <Greeting name="Santa" onClick={sayHi} />
}


// 

import { useState } from "react"

export default function TodoApp(){
  const [tasks, setTasks] = useState(["Go for a Walk", "Eat Breakfast"]);
  const[newTask, setNewTask] = useState("");
  function handleInputhchange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim() !==""){
    setTasks(t=>[...t,newTask])
    setNewTask("");
    }
  }
  function deleteTask(index){
      const updatedTasks = tasks.filter((_, i) => i !==index);
      setTasks(updatedTasks);
  }
  return(
    <div className="todoList">
      <h1>Todo App</h1>
      <div>
        <input 
        type= "text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputhchange}
        />
        <button className="addButton" onClick={addTask}>Add</button>
      </div>
    <ol>
      {tasks.map((task, index)=> 
      <li key={index}><span className="text">{task}</span>
      <button onClick={()=>deleteTask(index)}>Delete</button>
      </li>
      )}
    </ol>
    </div>
  )
}