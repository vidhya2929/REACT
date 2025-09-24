const name = "Ron";

function displaymessage() {
  return "Woww!";
}
function Hello() {
  // return <h1>Hello from a Component!{name}</h1> // expressions can also be done inside the curly brace
  // return <h1>Hello from a Component!{10 + 20}</h1>
  // return <h1>Hello from a Component!{displaymessage()}</h1>
  // Only return single elements.
  return (
    <div>
      {/* <h1>Hello from a Component!{name}</h1> <h1>Wowwww!!!!</h1> */}
      <h1>Hello Mike</h1> {/*here the component is static*/}
    </div>
  );
}
export default Hello;
