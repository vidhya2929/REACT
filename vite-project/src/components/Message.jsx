export default function Message(){
  function handleClick(){
    console.log("Button Clicked")
  }
  return <div>
    <button onClick={handleClick}>  {/*{handleClick()} will call all the function everytime*/}
      Click here to get a message
    </button>
  </div>
}