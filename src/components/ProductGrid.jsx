import ProductCard from "./ProductCard.jsx";
import "../styles/ProductGrid.css";

export default function ProductGrid({ products }) {
  return (
    <div id="product-grid">
      {products.map((p) => (
        <ProductCard product={p} />
      ))}
    </div>
  );
}
