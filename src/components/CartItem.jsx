import { useEffect, useState } from "react";
import "../styles/CartItem.css";

export default function CartItem({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(product.quantity);

  function onAdd() {
    setQuantity(quantity + 1);
  }

  function onMinus() {
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    const cartCopy = [...cart];
    const item = cartCopy.find((i) => i.id === product.id);
    item.quantity = quantity;
    setCart(cartCopy);
  }, [quantity]);

  function remove() {
    const newCart = cart.filter((i) => i.id !== product.id);
    setCart(newCart);
  }

  return (
    <div className="item">
      <div className="left">
        <img src={product.image}></img>
      </div>
      <div className="right">
        <div className="name">{product.name}</div>
        <div className="price">${product.price}</div>
        <div className="adjust">
          <button disabled={quantity <= 1} onClick={onMinus}>
            -
          </button>
          <input type="number" readOnly={true} value={quantity}></input>
          <button onClick={onAdd}>+</button>
        </div>
        <button className="remove" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}
