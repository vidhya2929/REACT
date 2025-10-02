import { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      const todosFromAPI = data.map((t) => ({
        name: t.title,
        done: t.completed,
      }));
      setTodos(todosFromAPI);
    });
},[]);
  return (
    <div>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos = {setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}


// whenever mapping through an item and whenever rendering through JSX or component we need to pass a key prop


// useState([]) → keeps track of all todos.

// useEffect(...) => fetches todo list once from API when the app loads.

// Renders:

// Form (for adding new tasks)

// TodoList (to display tasks)