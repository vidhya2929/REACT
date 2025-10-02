export default function Ecommerce(){
  const cart = [
    {id: 1, item: "Shoes", price: 2000},
    {id: 2, item: "bag", price: 1500}
  ];
  if(cart.length === 0) {
    return <p>Your cart is empty</p>
  }
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return(
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product)=>(
          <li key={product.id}>
            {product.item} - {product.price}
          </li>
        ))}
      </ul>
      <h3>Total: {total}</h3>
    </div>
  );
}