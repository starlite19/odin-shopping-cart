import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div id={product.id} className="card">
      <div className="contents">
        <img src={product.image}></img>
        <div className="name">{product.title}</div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
