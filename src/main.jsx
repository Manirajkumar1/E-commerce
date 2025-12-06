import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KId from "./components/KId.jsx";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Error from "./components/Error.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import About from "./components/About.jsx";
import { Provider } from "react-redux";
import appStore from "./store/Store.js";

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
        path: "/kid",
        element: <KId />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/men",
        element: <Men />,
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
