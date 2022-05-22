import React from "react";
import { shallow } from "enzyme";
import Maintenance from "./Maintenance";

describe("Maintenance", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Maintenance />);
    expect(wrapper).toMatchSnapshot();
  });
});
