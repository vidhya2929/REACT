export default function Fruit({ name, emoji, price }) {
  return (
    <>                                                    {/*Fragments*/}
      {/* {name}
      {emoji} {price} */}
      {/* {price > 5 ? ( */}
        <li>
          {emoji} {name} {price} {soldout ? "soldout": " "}
        </li>
      {/* ) : ( */}
        {/* "" */}
      {/* )} */}
      {/*conditionally rendering List items*/}
    </>
  );
  // if we give li here it becomes list items
}

// Now every single element is not a list element but instead it's actually it's very own component
