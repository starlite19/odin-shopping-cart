import "../styles/ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`}>
      <div id={product.id} className="card">
        <div className="contents">
          <img src={product.image}></img>
          <div className="name">{product.title}</div>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </Link>
  );
}
