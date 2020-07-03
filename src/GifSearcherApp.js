import React, { useState } from "react";
import { CategoryAdder } from "./components/CategoryAdder";
import { GifsGrid } from "./components/GifsGrid";

export function GifSearcherApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifSearcherApp</h2>
      <hr />
      <CategoryAdder setCategories={setCategories} />
      {categories.map((category) => {
        return <GifsGrid key={category} category={category} />;
      })}
    </>
  );
}
