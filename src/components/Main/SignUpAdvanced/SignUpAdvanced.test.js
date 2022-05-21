import React from "react";
import { shallow } from "enzyme";
import SignUpAdvanced from "./SignUpAdvanced";

describe("SignUpAdvanced", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignUpAdvanced />);
    expect(wrapper).toMatchSnapshot();
  });
});
