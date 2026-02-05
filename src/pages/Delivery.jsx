import React from "react";
import LiquidEther from "../Components/LiquidEther";

const Delivery = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background - Header orqasida */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      {/* Bu yerda headeringiz va boshqa content */}
      <div className="relative z-10">
        {/* Header va delivery page content */}
      </div>
    </div>
  );
};

export default Delivery;