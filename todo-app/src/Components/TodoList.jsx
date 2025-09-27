import TodoItem from "./TodoItem";
export default function TodoList({todos}){
  return(
    <div>
      {todos.map((item) => (    //pass the item to [callback fn]the TodoItem(component) as a prop
        <TodoItem key={item} item={item} todos={todos}/>
      ))}
    </div>
  )
}