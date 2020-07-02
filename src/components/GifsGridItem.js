import React from "react";
import PropTypes from "prop-types";

export const GifsGridItem = ({ id, title, url }) => {
  return (
    <div className="gif-card animate__animated animate__fadeInLeft">
      <img src={url} alt={title} />
      <p>{title ? title : `No title for this GIF`}</p>
    </div>
  );
};

GifsGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
