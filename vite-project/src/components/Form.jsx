import { useState } from "react";
export default function Form(){
  const [name, setname] = useState("");
  function handleChange(e){     //receive event from the below callback function
    // console.log(e.target.value);
    setname(e.target.value)
  }
  return <div>
    <form>
      <input onChange={function demo(e){
            return handleChange(e)
        // when onchange happens, which will execute this function 'demo' which will get the event
        // And that event is going to be passed to the callback function 'handleChange'
    

        // Arrow Function
        // onChange = {(e) => handleChange(e)}
        // More precise
        // onChange = {(e) => setName(e.target.value)}          // here fn 'handleChange' is not required.

      }} type="text" value={name}/>
    </form>
  </div>;
}

// pass in the event object to the particular handle change method

// To get access to the particular event -;
// create a function
// Get access to that event
// Pass that event to the function(as callback) which we have
