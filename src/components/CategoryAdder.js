import React, { useState } from "react";
import PropTypes from "prop-types";

export const CategoryAdder = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((previousCategories) => [
        inputValue.trim(),
        ...previousCategories,
      ]);

      setInputValue("");
    } else {
      window.alert("You must add a valid name");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.j. Hunter X Hunter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Add new category</button>
    </form>
  );
};

CategoryAdder.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
