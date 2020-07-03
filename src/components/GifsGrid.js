import React from "react";
import { GifsGridItem } from "./GifsGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifsGrid = ({ category }) => {
  const { data: imgs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="category-name animate__animated animate__fadeIn">
        {category}
      </h3>
      {loading && (
        <p className="animate__animated animate__flash">"Loading images..."</p>
      )}
      {
        <div className="card-grid">
          {imgs.map((img) => {
            return <GifsGridItem key={img.id} {...img} />;
          })}
        </div>
      }
    </>
  );
};

GifsGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
