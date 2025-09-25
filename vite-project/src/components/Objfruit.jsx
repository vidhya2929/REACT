import Fruit from "./Fruit";
export default function Objfruit() {
  const objFruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {objFruits.map((objfruit) => (
          // <li key={objfruit.name}>
          //   {objfruit.emoji} {objfruit.name} ${objfruit.price}
          // </li>
          <Fruit
            key={objfruit.name}
            name={objfruit.name}
            emoji={objfruit.emoji}
            price={objfruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
