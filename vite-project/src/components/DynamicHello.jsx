function DynamicHello(props) {
  const { name, message } = props; //name and message should be exactly same as the properties, it can also destrucure from the fn declaration itself -; function DynamicHello({name, message}){
  return (
    <div className="App">
      {/* We cannot directly render objects inside a react component */}
      {/* <h1>{props.message} , {props.name}</h1>    defined here used there */}
      <h1>
        {message} {name}
      </h1>
    </div>
  );
}
export default DynamicHello;
