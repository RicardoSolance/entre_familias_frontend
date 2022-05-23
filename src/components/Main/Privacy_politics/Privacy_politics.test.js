import React from "react";
import { shallow } from "enzyme";
import Privacy_politics from "./Privacy_politics";

describe("Privacy_politics", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Privacy_politics />);
    expect(wrapper).toMatchSnapshot();
  });
});
