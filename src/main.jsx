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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SplitText from "./Components/SplitText.jsx";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

<SplitText
  text="GREE AIR CONDITIONER"
  className="text-2xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
  showCallback
/>;
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
