import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />,

    loader: async (): Promise<{name: string, price: number, popularItem: boolean}[]> => {
      return fetch("http://localhost:8080/products")
        .then(res => res.json())
    },

    errorElement: <Home />
  },
  {
    path: "/about",
  },
  {
    path: "/map"
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
