import { useState } from "react";
export default function Form({todos,setTodos}){
    // const [todo, setTodo] = useState("");
    const[todo, setTodo]=useState({name:"", done:false});


  function handleSubmit(e) {
    e.preventDefault();
    if(todo.name.trim() === ""){
      return;
    }
    setTodos([todo,...todos]);
    setTodo({name:"", done:false});
    // to retain previous , spread operator is taken
  }
  return <form onSubmit={handleSubmit}>
        <input
          // onChange={(e) => setTodo(e.target.value)}
          onChange={(e) => setTodo({name: e.target.value, done: false})}
          
          // value={todo.name}
          value={todo.name}
          type="text"
        />
        <button type="Submit">Add</button> {/*The page get refreshed */}
      </form>
}