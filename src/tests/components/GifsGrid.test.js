import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifsGrid } from "../../components/GifsGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tesing the <GifsGrid /> component", () => {
  const category = "random";

  test("should show the component correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifsGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the gif items when the images are loaded with useFetchGifs", () => {
    const gifs = [
      { id: "ABC", url: "https://google.com/i/ds.jpg", title: "any" },
      { id: "ABC2", url: "https://google.com/i/ds.jpg", title: "any" },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifsGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifsGridItem").length).toBe(gifs.length);
  });
});
