function Student(props){
  return(
    <div>
      <p>Name: {props.name}</p> {/*to get the value associated with the key props.name */}
      <p>Age: {props.age}</p>
    </div>
  )
}
export default Student