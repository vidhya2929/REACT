// ProductList
import { useState } from "react";
import ProductItem from "./ProductItem";

 const initialProducts = [
  { id: 1, name: "Shoes", Category: "Footwear", price: 50, inStock: true },
  { id: 1, name: "Shirt", Category: "CLothing", price: 20, inStock: false },
  { id: 1, name: "Hat", Category: "Accessories", price: 15, inStock: true },
  { id: 1, name: "Bag", Category: "Accessories", price: 30, inStock: true },
];

export default function ArrayTask() {
  const [showInStock, setShowInStock] = useState(false);

  // Filter products based on inStock toggle
  const filteredProducts = initialProducts.filter(
    (product) => !showInStock || product.inStock
  );

  // Calculate total price of displayed products
  const totalPrice = filteredProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>

      {/* Filter button */}
      <button
        onClick={() => setShowInStock(!showInStock)}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg"
      >
        {showInStock ? "Show All Products" : "Show Only In-Stock"}
      </button>

      {/* Render product items */}
      <ul className="mb-4">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>

      {/* Total price */}
      <p className="font-bold text-lg">Total Price: ${totalPrice}</p>
    </div>
  );
}
