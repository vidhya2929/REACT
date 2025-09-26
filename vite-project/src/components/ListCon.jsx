import Fruit from "./Fruit";
export default function ListCon(){
const fruits= [
    { name: "Apple", price: 10, emoji: "🍎" , soldout: false},
    { name: "Mango", price: 7, emoji: "🥭" , soldout: false},
    { name: "Banana", price: 2, emoji: "🍌" , soldout: true},
    { name: "Orange", price: 5, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true},
  ];
 return (
    <div>
      <ul>
        {fruits.map((objfruit) => (
          // <li key={objfruit.name}>
          //   {objfruit.emoji} {objfruit.name} ${objfruit.price}
          // </li>
          <Fruit
            key={objfruit.name}
            name={objfruit.name}
            emoji={objfruit.emoji}
            price={objfruit.price}
            soldout={objfruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}