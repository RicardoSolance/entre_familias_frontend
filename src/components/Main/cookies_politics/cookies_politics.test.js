import React from "react";
import { shallow } from "enzyme";
import Cookies_politics from "./cookies_politics";

describe("Cookies_politics", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cookies_politics />);
    expect(wrapper).toMatchSnapshot();
  });
});
