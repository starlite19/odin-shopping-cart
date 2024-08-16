import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid.jsx";
import ItemPage from "./ItemPage.jsx";
import Loading from "./Loading.jsx";
import { useParams } from "react-router-dom";

export default function ShopPage() {
  const id = useParams().id;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (id) {
    return (
      <div>
        {console.log(products)}
        <NavBar />
        <ItemPage product={products[id - 1]} />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="content">
          <h1>Products</h1>
          <ProductGrid products={products} />
        </div>
      </div>
    );
  }
}
