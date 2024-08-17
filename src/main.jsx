import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./components/RootPage.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import CartPage from "./components/CartPage.jsx";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ShopPage />,
        children: [{ path: ":id", element: <ShopPage /> }],
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
