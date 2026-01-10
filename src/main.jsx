import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Error from "./components/Error.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { Provider } from "react-redux";
import appStore from "./store/Store.jsx"
import CartItems from "./components/CartItems.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/cartitems",
        element: <CartItems/>,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
