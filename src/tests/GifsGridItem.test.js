import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifsGridItem } from "../components/GifsGridItem";

describe("testing the <GifsGridItem/> component for the Gifs App", () => {
  test("should show the component correctly", () => {
    const wrapper = shallow(
      <GifsGridItem id={"0"} title="Random" url="www.google.com" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
