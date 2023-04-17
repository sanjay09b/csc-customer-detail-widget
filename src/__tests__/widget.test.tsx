import React from "react";
import { render } from "@testing-library/react";
import Widget from "../widget";

describe("Widget", () => {
  it("renders", () => {
    render(<Widget />);
  });
});
