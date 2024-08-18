import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";
import Summary from "./Summary.jsx";
import { useOutletContext } from "react-router-dom";
import "../styles/CartPage.css";

export default function CartPage() {
  const [cart, setCart] = useOutletContext();

  return (
    <div className="content">
      <h1>Your Cart</h1>
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="cartContent">
          <div className="left">
            {cart.map((i) => (
              <CartItem product={i} cart={cart} setCart={setCart} />
            ))}
          </div>
          <div className="right">
            <Summary cart={cart} />
          </div>
        </div>
      )}
    </div>
  );
}
