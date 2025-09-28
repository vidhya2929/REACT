import TodoItem from "./TodoItem";
export default function TodoList({todos,setTodos}){
  return(
    <div>
      {todos.map((item) => (    //pass the item to [callback fn]the TodoItem(component) as a prop
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}