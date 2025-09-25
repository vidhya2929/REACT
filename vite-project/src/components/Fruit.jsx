export default function Fruit({ name, emoji, price }) {
  return (
    <div>
      {name}
      {emoji} {price}
    </div>
  );
  // if we give li here it becomes list items
}

// Now every single element is not a list element but instead it's actually it's very own component
