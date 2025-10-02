export default function Todo() {
  const todos = [
    { id: 1, task: "Learn React", done: true },
    { id: 2, task: "Practice JavaScript", done: false },
    { id: 3, task: "Build a project", done: false },
  ];
  return(
    <div>
      <ul>
      {todos.map((todo) => (
        <li>{todo.done ? <s>{todo.task}</s>: todo.task}</li>
      ))}
      </ul>
    </div>
  );
}

