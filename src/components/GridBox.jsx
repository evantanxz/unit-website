import React from "react";

function GridBox({ title, link, description }) {
  return (
    <div className="grid-box">
      <p>{title}</p>
      {description && <p>{description}</p>}
      {link && (
        <a href={link} style={{ wordBreak: "break-all" }}>
          {link}
        </a>
      )}
    </div>
  );
}

export default GridBox;
