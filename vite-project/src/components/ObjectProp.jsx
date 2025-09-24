function ObjectProp(props) {
  // Destructuring
  // function ObjectProp({person}){
  return (
    <div className="App">
      <h1>
        {props.person.name} {props.person.message} {props.person.seatNumbers}
        {/* destructuring */}
        {/* {person.name} {person.message} {person.seatNumbers} */}
      </h1>
    </div>
  );
}
export default ObjectProp;
