import React from "react";

const GridComponent = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      {children}
    </div>
  );
};

export default GridComponent;
