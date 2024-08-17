import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useState, useEffect } from "react";
export default function NavBar({ cart }) {
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    let q = 0;
    for (let i = 0; i < cart.length; i++) {
      q += cart[i].quantity;
    }
    setCartQuantity(q);
    console.log(cart);
  }, [cart]);

  return (
    <div id="nav-bar">
      <div id="logo">
        <Link to="/">The Store</Link>
      </div>
      <div id="nav-right">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart: {cartQuantity}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
