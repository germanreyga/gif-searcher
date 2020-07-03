import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifsGridItem } from "../../components/GifsGridItem";

describe("testing the <GifsGridItem/> component for the Gifs App", () => {
  const title = "Random";
  const id = "001-b";
  const url = "www.google.com";

  const wrapper = shallow(<GifsGridItem id={id} title={title} url={url} />);

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a text with the title of the item", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph.text().trim()).toBe(title);
  });

  test("should obtain an image same as the url and alt of the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should show an animate__fadeInLeft in the img", () => {
    const div = wrapper.find(".gif-card");
    expect(div.prop("className")).toContain("animate__fadeInLeft");
  });
});
