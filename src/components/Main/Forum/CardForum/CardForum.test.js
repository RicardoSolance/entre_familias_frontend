import React from "react";
import { shallow } from "enzyme";
import CardForum from "./CardForum";

describe("CardForum", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardForum />);
    expect(wrapper).toMatchSnapshot();
  });
});
