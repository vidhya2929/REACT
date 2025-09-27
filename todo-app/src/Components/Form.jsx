import { useState } from "react";
export default function Form({todos,setTodos}){
    const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    // to retain previous , spread operator is taken
  }
  return <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="Submit">Add</button> {/*The page get refreshed */}
      </form>
}