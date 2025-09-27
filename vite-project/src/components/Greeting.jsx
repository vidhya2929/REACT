function Greeting({name, onClick}){
  return <button onClick={onClick}>Hello {name}</button>
}

export default function App(){
  function sayHi(){
    alert("Hi there!");
  }
  return <Greeting name="Harry" onClick={sayHi} />
}