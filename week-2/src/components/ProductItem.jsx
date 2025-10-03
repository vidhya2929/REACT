export default function ProductItem({product}){
  return (
    <li className="mb-2">
      <span className="font-semibold">{product.name}</span> - ${product.price}
      <span className="italic">{product.category}</span>
      {!product.instock && <span className="text-red-500">(out of stock)</span>}
    </li>
  );
}
