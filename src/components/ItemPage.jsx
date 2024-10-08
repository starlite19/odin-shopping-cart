import "../styles/ItemPage.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import starImg from "../assets/star.svg";
import addToCartImg from "../assets/add-to-cart.svg";

export default function ItemPage({ product }) {
  const [cart, setCart] = useOutletContext();

  const [quantity, setQuantity] = useState(1);

  function onAdd() {
    setQuantity(quantity + 1);
  }

  function onMinus() {
    setQuantity(quantity - 1);
  }

  function addToCart() {
    const cartCopy = [...cart];
    let item = cartCopy.find((i) => i.id === product.id);
    if (item) {
      item.quantity += quantity;
      setCart(cartCopy);
    } else {
      const newItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        image: product.image,
      };

      setCart([...cart, newItem]);
    }
  }

  return (
    <div className="item">
      <div className="left">
        <img src={product.image}></img>
      </div>
      <div className="right">
        <div className="head">
          <div className="name">{product.title}</div>
          <div className="rating">
            <img src={starImg} />
            {product.rating.rate}
          </div>
        </div>
        <div className="desc">{product.description}</div>

        <div className="price">${product.price}</div>
        <div className="adjust">
          <button disabled={quantity <= 1} onClick={onMinus}>
            -
          </button>
          <input type="number" readOnly={true} value={quantity}></input>
          <button onClick={onAdd}>+</button>
        </div>
        <button className="addCart" onClick={addToCart}>
          <img src={addToCartImg} /> <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
