import { useState } from "react";

const products = [
  { id: 1, name: "Shoes", price: 50, inStock: true },
  { id: 2, name: "Shirt", price: 20, inStock: false },
  { id: 3, name: "Hat", price: 15, inStock: true },
  { id: 4, name: "Bag", price: 40, inStock: true },
];
export default function ArrayMethods() {
  const [showInStock, setShowInStock] = useState(false);

  const filterProducts = products.filter(
    (products) => !showInStock || products.inStock
  );

  const totalPrice = filterProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  

  return(
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <label className="mb-4 inline-block">
        <input type="checkbox" checked={showInStock} onChange={() => setShowInStock(!showInStock)}/>
      Show only in-stock
      </label>

       <ul className="mb-4">
        {filterProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            {!product.inStock && <span className="text-red-500">(Out of stock)</span>}
          </li>
        ))}
      </ul>

      <p className="font-bold">Total Price: ${totalPrice}</p>
    </div>
  )
}

