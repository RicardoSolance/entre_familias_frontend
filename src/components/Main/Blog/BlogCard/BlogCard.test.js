import React from "react";
import { shallow } from "enzyme";
import BlogCard from "./BlogCard";

describe("BlogCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BlogCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
