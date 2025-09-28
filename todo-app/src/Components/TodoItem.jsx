export default function TodoItem({item, todos, setTodos}){
  function handleDelete(item){
    console.log("Delete the Button for item", item);
    setTodos(todos.filter((todo)=>todo !== item))
  }
  function handleClick(name){
    const newArr = todos.map((todo)=>todo.name === name ? {...todo,done:!todo.done}:todo);
    setTodos(newArr);
    console.log(todos);
  }
  return (<div>
    <h3><span onClick={() => handleClick(item.name)} style={{textDecoration: item.done ? "line-through":"none",cursor:"pointer"}}>{item.name}</span> <span>
      <button onClick={() =>handleDelete(item)}>Delete</button>
    </span></h3>
    
    </div>)
  
}