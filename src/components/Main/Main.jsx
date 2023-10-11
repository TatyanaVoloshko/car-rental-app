import React, { useState, useEffect } from "react";

const CarOut = require("../CarCard/Images/CarOut.png");

const CarAnimation = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1);
    }, 1);
      
      const resetAnimation = () => {
        setPosition(0);
      };

      const resetInterval = setInterval(resetAnimation, 5000);


    return () => {
        clearInterval(animationInterval);
         clearInterval(resetInterval);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100px" }}>
      <img
        src={CarOut}
        alt="Car"
        style={{
          position: "absolute",
          left: `${position}px`,
          transition: "left 0.1s",
        }}
      />
    </div>
  );
};

export default CarAnimation;
