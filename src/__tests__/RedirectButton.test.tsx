import React from "react";
import { render } from "@testing-library/react";
import RedirectButton from "../widget/RedirectButton/RedirectButton";

describe("Suspended status button rendred successfully", () => {
  it("renders", () => {
    render(<RedirectButton />);
  });
});
