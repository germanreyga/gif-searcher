import React from "react";

export const GifsGridItem = ({ id, title, url }) => {
  return (
    <div className="gif-card animate__animated animate__fadeInLeft">
      <img src={url} alt={title} />
      <p>{title ? title : `No title for this GIF`}</p>
    </div>
  );
};
