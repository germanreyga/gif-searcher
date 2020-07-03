import { CategoryAdder } from "../../components/CategoryAdder";
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("testing the <CategoryAdder/> component", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<CategoryAdder setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdder setCategories={setCategories} />);
  });

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the text box", () => {
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should not post information on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clean the textbox", () => {
    // 1. Simulate inputChange
    const input = wrapper.find("input");
    const value = "Hello world";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    // 2. Simulate submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // 3. setCategories should have been called
    expect(setCategories).toHaveBeenCalledTimes(1);

    // 4. The input values should be empty ('')
    expect(input.prop("value")).toBe("");
  });
});
