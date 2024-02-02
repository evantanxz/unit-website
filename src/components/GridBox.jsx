import React from "react";

function GridBox({ title, link }) {
  return (
    <div className="grid-box">
      <p>{title}</p>
      <a href={link} style={{ wordBreak: "break-all" }}>
        {link}
      </a>
    </div>
  );
}

export default GridBox;
