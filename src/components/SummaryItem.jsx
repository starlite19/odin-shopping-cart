import "../styles/SummaryItem.css";
export default function SummaryItem({ product }) {
  return (
    <div className="summaryItem">
      <div className="name">
        {product.name} x{product.quantity}
      </div>
      <div className="price">
        ${(product.quantity * product.price).toFixed(2)}
      </div>
    </div>
  );
}
