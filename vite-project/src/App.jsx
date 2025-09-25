import Hello from "./components/Hello";
import DynamicHello from "./components/DynamicHello";
import ArrayProp from "./components/ArrayProp";
import ObjectProp from "./components/ObjectProp";
import Card from "./components/Card";
import Student from "./components/Student";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Objfruit from "./components/Objfruit";
function App() {
  // const seatNumbers = [1,4,7];
  // const person = {
  //   name: "Harry",
  //   message: "Hey there!",
  //   seatNumbers: [1, 4, 7],
  // };
  const handleClick = () => {
    alert("Button inside Card clicked!");
  };
  return (
    <div className="App">
      <Objfruit />
      {/* <Fruits /> */}
      {/* <Hello /> */}
      {/*Capital is used because it makes easy to distinguish between html tags and components*/}
      {/* reuse of component */}
      {/* <Hello />   */}
      {/*What happens here is that it replaces the code from Hello.js to here*/}
      {/* <Hello /> */}
      {/* <DynamicHello name="Ron" message="Hi there!" /> We can pass many number of props as we want */}
      {/* <ArrayProp name="Ron" message="Hi there!"  seatNumbers ={seatNumbers} /> */}
      {/* <DynamicHello name="Tom" message="Hey How Are You!"/>  */}
      {/* <ObjectProp person={person} /> */}
      {/* <Card
      title="Beautiful Landscape"
      description= "This is a scenic view of mountains"
      image ="data:image/jpeg;base64,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"
      /> */}
      {/* <Card
      title="Adventure Trip"
      description = "This is a scenic view of mountains"
      image = "https://via.placeholder.com/300x200">
      <Button label="Join Now" onClick={handleClick}/>
      </Card> */}

      {/* <Counter /> */}
    </div>
  );
}
// function Button({label, onClick}){
//   return (
//     <button onClick={onClick}
//     style={{padding: "8px 16px",
//         borderRadius: "5px",
//         border: "none",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//         cursor: "pointer"}}>{label}</button>
//   );
// }
{
  /* <Student name="sponge" age={30}/>   // this key value pair is stored with in the props object */
}
export default App;
