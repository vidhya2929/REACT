import Hello from "./components/Hello";
import DynamicHello from "./components/DynamicHello";
import ArrayProp from "./components/ArrayProp";
import ObjectProp from "./components/ObjectProp";
function App() {
  // const seatNumbers = [1,4,7];
  const person = {
    name: "Harry",
    message: "Hey there!",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      {/* <Hello /> */}
      {/*Capital is used because it makes easy to distinguish between html tags and components*/}
      {/* reuse of component */}
      {/* <Hello />   */}
      {/*What happens here is that it replaces the code from Hello.js to here*/}
      {/* <Hello /> */}
      {/* <DynamicHello name="Ron" message="Hi there!" /> We can pass many number of props as we want */}
      {/* <ArrayProp name="Ron" message="Hi there!"  seatNumbers ={seatNumbers} /> */}
      {/* <DynamicHello name="Tom" message="Hey How Are You!"/>  */}
      <ObjectProp person={person} />
    </div>
  );
}
export default App;
