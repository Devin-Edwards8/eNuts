import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import Map from "./scenes/Map/Map";
import About from "./scenes/About/About";
import ErrorElement from "./scenes/Error/Error";
import Product from "./scenes/Product/Product";
import { ProductContract } from "./types";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home />,
    errorElement: <ErrorElement />
  },
  {
    path: "/shop",
    element: <Shop />,

    loader: async (): Promise<ProductContract[]> => {
      return fetch("https://enuts.devinedwards.xyz/server/products")
        .then(res => res.json())
    },

    errorElement: <ErrorElement />
  },
  {
    path: "/shop/:productId",
    element: <Product />,

    loader: async ({params}): Promise<ProductContract> => {
      return fetch(`https://enuts.devinedwards.xyz/server/product?productId=${params.productId}`)
        .then(res => res.json())
    },

    errorElement: <ErrorElement />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorElement />
  },
  {
    path: "/locations",
    element: <Map />,
    errorElement: <ErrorElement />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
