import React from "react";
import DotGrid from "../Components/DotGrid";

const Home = () => {
  return (
    <div className="bg">
      <div style={{ width: "100%", height: "800px", position: "relative" }}>
        <DotGrid
          dotSize={3}
          gap={17}
          baseColor="#271E37"
          activeColor="#f04b22"
          proximity={200}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1}
        >
          {/* 🔥 TEXT USTIDA */}
          <div className="text-center">
            <h1 className="text-2xl"> hello world</h1>
          </div>
        </DotGrid>
      </div>
    </div>
  );
};

export default Home;
