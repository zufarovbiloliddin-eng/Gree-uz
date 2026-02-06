import React from "react";
import FloatingLines from "../Components/FloatingLights";
import SplashCursor from "../Components/SplashCursor";

const Partners = () => {
  return (
    <div className="relative min-h-screen">
      <SplashCursor />

      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <FloatingLines />
      </div>

      {/* Content */}
      <div>{/* ... */}</div>
    </div>
  );
};

export default Partners;
