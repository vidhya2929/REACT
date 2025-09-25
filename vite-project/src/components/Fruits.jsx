export default function Fruits() {
  const fruits = ["apple", "mango", "banana", "Orange", "Pinapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h2>{fruit}</h2>
      ))}
    </div>
  );
}
