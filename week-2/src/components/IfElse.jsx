//  function Item({name,isPacked}){
//   if(isPacked){
//     return <li className="item">{name} ✅</li>
//   }
//   return <li className="item">{name}</li>
// }
//  export default function IfElse(){
//   return(
//     <section>
//       <h1 className="bg-yellow-200 text-center font-extrabold">Sally Ride's Packing List</h1>
//       <ul>
//         <Item  isPacked={true} name="Space suit"/>
//         <Item isPacked={false} name="Helmet with a golden leaf" />
//         <Item isPacked={true} name="Photo of Tam"/>
//       </ul>
//     </section>
//   )
//  }

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function IfElse() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}