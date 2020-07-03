import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifSearcherApp } from "../../GifSearcherApp";

describe("testing the <GifSeacherApp /> component", () => {
  test("should show the component correctly", () => {
    const wrapper = shallow(<GifSearcherApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["Naruto", "Hunter x Hunter"];
    const wrapper = shallow(<GifSearcherApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifsGrid").length).toBe(categories.length);
  });
});
