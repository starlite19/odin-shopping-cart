import "../styles/ItemPage.css";
import { useState } from "react";

export default function ItemPage({ product }) {
  const [quantity, setQuantity] = useState(1);

  function onAdd() {
    setQuantity(quantity + 1);
  }

  function onMinus() {
    setQuantity(quantity - 1);
  }

  return (
    <div className="item">
      <div className="left">
        <img src={product.image}></img>
      </div>
      <div className="right">
        <div className="name">{product.title}</div>
        <div className="desc">{product.description}</div>
        <div className="rating">{product.rating.rate}</div>
        <div className="price">${product.price}</div>
        <div className="adjust">
          <button disabled={quantity <= 1} onClick={onMinus}>
            -
          </button>
          <input type="number" value={quantity}></input>
          <button onClick={onAdd}>+</button>
        </div>
        <button className="addCart">Add to Cart</button>
      </div>
    </div>
  );
}
