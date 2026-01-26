import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUS from "./pages/AboutUS.jsx";
import Bought from "./pages/Bought.jsx";
import Delivery from "./pages/Delivery.jsx";
import Partners from "./pages/Partners.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <AboutUS />,
      },
      {
        path: "/Contact",
        element: <Bought />,
      },
      {
        path: "/Delivery",
        element: <Delivery />,
      },
      {
        path: "/Partners",
        element: <Partners />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
