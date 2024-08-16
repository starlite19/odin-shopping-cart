import NavBar from "./NavBar.jsx";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div class="page">
      <NavBar />
      <div id="home-content">
        <div id="intro">Welcome to</div>
        <div id="store-name">The Store</div>
        <div className="subtitle">THE store for all your needs</div>
        <div className="button">
          <Link to="/products">SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
}
