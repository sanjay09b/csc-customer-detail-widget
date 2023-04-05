import React from "react";
import { render } from "@testing-library/react";
import BannedStatusButton from "../widget/StatusButtons/BannedStatusButton";

describe("Banned status button rendred successfully", () => {
  it("renders", () => {
    render(<BannedStatusButton />);
  });
});
