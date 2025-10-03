export default function ChildButton({onIncrement}){   // child receives the function via props.
  return (
    <button onClick={onIncrement} className="px-4 py-2 mt-4 bg-green-500 text-white rounded-lg"> 
    {/* When clicked => calls parent's increment. Parent updates the count -< re-renders with new value. */}
      Increment Counter
    </button>
  );
}