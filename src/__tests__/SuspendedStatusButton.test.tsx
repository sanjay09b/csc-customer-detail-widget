import React from "react";
import { render } from "@testing-library/react";
import SuspendedStatusButton from "../widget/StatusButtons/SuspendedStatusButton";

describe("Suspended status button rendred successfully", () => {
  it("renders", () => {
    render(<SuspendedStatusButton />);
  });
});
