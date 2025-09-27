export default function TodoItem({item, todos}){
  function handleDelete(){
    console.log("Delete the Button for item", item);
  }
  return (<div>
    <h3>{item} <span>
      <button onClick={() =>handleDelete(item)}>Delete</button>
    </span></h3>
    
    </div>)
  
}