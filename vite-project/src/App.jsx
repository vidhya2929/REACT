import Hello from "./components/Hello";
import DynamicHello from "./components/DynamicHello";
import ArrayProp from "./components/ArrayProp";
import ObjectProp from "./components/ObjectProp";
import Card from "./components/Card";
import Student from "./components/Student";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Objfruit from "./components/Objfruit";
import ConditionalComponent from "./components/ConditionalComponent";
import MessageEl from "./components/MessageEl";
import Ternary from "./components/Ternary";
import ListCon from "./components/ListCon";
import Message from "./components/Message";
import Form from "./components/Form";
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
      
      {/* <Form /> */}
      {/* <Message /> */}
      {/* <ListCon /> */}
      {/* <Ternary /> */}
      {/* <MessageEl/> */}
      {/* <ConditionalComponent /> */}
      {/* <Objfruit /> */}
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
      image =""/> */}
      {/* <Card
      title="Adventure Trip"
      description = "This is a scenic view of mountains"
      image = "https://via.placeholder.com/300x200">
      <Button label="Join Now" onClick={handleClick}/>
      </Card> */}

      <Counter />
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
// {
//   /* <Student name="sponge" age={30}/>   // this key value pair is stored with in the props object */
// }
export default App;