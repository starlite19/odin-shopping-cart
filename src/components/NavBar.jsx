import Cart from "./Cart.jsx";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
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
            <Link to="/cart">
              <Cart />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
