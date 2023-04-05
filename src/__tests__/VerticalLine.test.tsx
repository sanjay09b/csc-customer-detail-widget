import React from "react";
import { render } from "@testing-library/react";
import VerticalLine from "../widget/SeparationLine/VerticalLine";

describe("Suspended status button rendred successfully", () => {
  it("renders", () => {
    render(<VerticalLine />);
  });
});
