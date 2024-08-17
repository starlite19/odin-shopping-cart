import SummaryItem from "./SummaryItem.jsx";
import { useEffect, useState } from "react";
import "../styles/Summary.css";
export default function Summary({ cart }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sub = 0;
    for (let i = 0; i < cart.length; i++) {
      sub += cart[i].quantity * cart[i].price;
    }
    setSubtotal(sub.toFixed(2));
  }, [cart]);
  return (
    <div>
      <h2>Order Summary</h2>
      <hr></hr>
      {cart.map((i) => (
        <SummaryItem product={i} />
      ))}
      <hr></hr>
      <div id="subtotal">
        <div>Subtotal</div>
        <div>{subtotal}</div>
      </div>
      <button id="checkout">PROCEED TO CHECKOUT</button>
    </div>
  );
}
