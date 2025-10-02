// JSX integration of HTML and JS
//React Component always return JSX

// State => Used to modify variables and have things interactive

// Every time when clicking on a key it is going to  call on 'onChange'

// When we change a state variable it is always going to re-render the entire component
// if we update a value somewhere we should ensure to update everywhere inside the component
// Any type of data can be give to the useState


// const [todos, setTodos] = useState([])   //as todos variable can't modify we use spread operator to spread it out.
// setTodos([...todos,
// {id:crypto.randomUUID(),title: newItem,completed: false},
// ])
// setTodos([...todos,
// {id:crypto.randomUUID(),title: newItem,completed: false},])
// only 1 todo not 2 todos are added

// ...todos  value is always === what is rendered on last render  by default it is an empty array
// when call setTodos it takes the empty array and append with one value
// When call second time the todo is still in the empty array

// To modify the existing data => pass a function to the setState and the function is going to return whatever value you want the new state to be & "It takes one argument which is the current value" for whatever your state is

function handleSubmit(e){
  e.preventDefault()
setTodos(currenttodos => {
  return[...currenttodos,{id:crypto.randomUUID(),title: newItem,completed: false},]
})
}
setNewItem("")

function ToggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return {...todo, completed}
      }
      return todo
    })
  })
}
// To use the current value pass the function [in the (setTodoo)]

// Loop through the todos and render using map()
// {} => to run js code 
{todos.map(todo => {
  return <li>
    <label>
      <input type="checkbox" checked={todo.completed}></input>
      {todo.title}
    </label>
  </li>
})}

// if returning an array of elements inside the react(using map or other method) ensure each element at the top level has a key property (which must be a unique identifier)

// because if we want to edit or delete one of the element and did'nt want to change any other element use key to know which one is to be changing

// after all this setNewItem ("")  // to clear the input field

// whenever click on input 
  <input type="checkbox" checked={todo.completed} onChange={e => ToggleTodo(todo.id, e.target.checked)}></input>


  // short-circuiting  (if no input)
  {todos.length === 0 && "No todos"} 

  // Props allow to pass info down to custom components


  // useEffect return anything takes a function as its argument , this function for useEffect says run this function everytime the objects inside the array of second property changes 

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  },[todos])  // runs the function any time the todos change

// HOOKS should be call in the top of your function  (can't do inside a loop,if,etcc...)