export default function MyForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); //Read the form data

    fetch("/some-api", { method: form.method, body: formData });
  }
  return (
    <form>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <p>
        RadioButton:
        <label>
          <input type="radio" name="MyRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="MyRadio" value="option2" defaultChecked={true}/>
          Option 2
        </label>
        <label>
          <input type="radio" name="MyRadio" value="option3" />
          Option 3
        </label>
      </p>
      <hr />
      <button type="reset">Reset Form</button>
      <button type="submit">Submit Form</button>
    </form>
  );
}


// give every input a name => it is used as a key in the form data
// <'button'> inside a 'form' without a 'type' will submit it.So use the type.
// Controlling an input with a state variable
// AN input like <input /> is uncontrolled. <input defaultValue="Initial text" />,JSX only specify the initial value, does not control what the value should be right now.
// To render a controlled input, pass the value prop to it(checked for checkboxes and radios). React will force the input to always have the value passed.

function form(){
  const[firstName,setFirstName] = useState(''); //Declare a state variable
  //.........
  return(
    <input value={firstName} // force the input's value to match the state variable
    onChange={e => setFirstName(e.target.value)} //update the state variable on any edits!.
    />
  );
}
// The value passed to controlled components should not be undefined or null.
// Passing a value without onChange, it will be impossible to type into the input.

// specify the initial value => pass defaultValue
// to control the input with a state variable => onChange handler
//  if the value is intentionally read-only => add readonly prop to suppress thr error

// FOR CHECKBOXES => "e.target.checked " ,instead of, e.target.value