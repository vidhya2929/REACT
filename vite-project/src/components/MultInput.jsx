import { useState } from "react";
export default function MultiInput() {
  const [name, setName] = useState({ firstName: "", lastName: ""});
  function handleSubmit(e){
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({...name, firstName:e.target.value})}
          type="text"
          value={name.firstName}
        />
        <input type="text" onChange={(e) => setName({...name,lastName:e.target.value})} value = {name.lastName} />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}

// When clicking in a button inside the form, the form get submitted.
// In React application, when we refresh a page , the data which is stored inside the state is lost
// Therefore prevent the default behaviour

function outer(){
  let count = 0;
  function inner(){
    count++;
    return count;
  }
}
const inc = outer();
console.log(inc())