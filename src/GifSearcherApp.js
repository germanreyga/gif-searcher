import React, { useState } from "react";
import { CategoryAdder } from "./components/CategoryAdder";
import { GifsGrid } from "./components/GifsGrid";

function GifSearcherApp() {
  const [categories, setCategories] = useState(["Berserk"]);

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

export default GifSearcherApp;
