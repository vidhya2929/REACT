import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
export default function Todo() {
   const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos = {setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}


// whenever mapping through an item and whenever rendering through JSX or component we need to pass a key prop