import React, { useState, useEffect } from "react";

const CarOut = require("../CarCard/Images/CarOut.png");

const CarAnimation = () => {
  const [position, setPosition] = useState(0);
  const maxWidth = window.innerWidth - 100;

  useEffect(() => {
     const animationInterval = setInterval(() => {
       setPosition((prevPosition) => {
         if (prevPosition >= maxWidth) {
           return 0;
         }
         return prevPosition + 1;
       });
     }, 1);

      const resetInterval = setInterval(() => {
        setPosition(0);
      }, 5000);


    return () => {
        clearInterval(animationInterval);
         clearInterval(resetInterval);
    };
  }, [maxWidth]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100px" }}>
      <img
        src={CarOut}
        alt="Car"
        style={{
          position: "absolute",
          left: `${position}px`,
          transition: "left 0.1s",
          width: "250px",
        }}
      />
    </div>
  );
};

export default CarAnimation;
