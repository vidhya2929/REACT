import {useState} from "react";
import InputBox from "./InputBox";
import DisplayBox from "./DisplayBox";
export default function Parent(){
  const [text, setText] = useState("");

  return(
    <div>
      <InputBox text={text} onTextChange={setText}/>
      <DisplayBox text={text} />
    </div>
  )
}

// STATE LIVES IN THE NEAREST COMMON ANCESTOR OF COMPONENTS THAT NEED IT.
// CHILDREN ONLY RECEIVE DATA VIA PROPS AND COMMUNICATE BACK VIA FUNCTIONS(CALLBACKS).
// PREVENTS DUPLICATION AND KEEPS UI SYNCHRONIZED

// Eg: real-world
// a searchbar - that updates search results
// a form with multiple inputs - parent collects all the values.
// a shopping cart - productlist adds item, cart component displays them.