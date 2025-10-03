// add a text input, use useState to store it's value, Display the typed name below the input.
import { useState } from "react";

export default function NameInput(){
  const [name, setName] = useState("");

  function handleChange(e){
    setName(e.target.value);
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} className="border px-3 py-2 rounded">
      </input>
      <p className="mt-4 text-lg">You typed: {name}</p>
    </div>
  );
}