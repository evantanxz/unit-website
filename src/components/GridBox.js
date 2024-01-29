import React from "react";

function GridBox({ title, link }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "48px 16px",
        margin: "16px 0",
      }}
    >
      <p>{title}</p>
      <a href={link} style={{ wordBreak: "break-all" }}>
        {link}
      </a>
    </div>
  );
}

export default GridBox;
