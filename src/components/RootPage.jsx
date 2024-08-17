import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function RootPage() {
  const [cart, setCart] = useState([]);
  return (
    <div className="page">
      <NavBar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}
