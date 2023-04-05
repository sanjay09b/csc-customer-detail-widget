import React from "react";
import { render } from "@testing-library/react";
import DeactivatedStatusButton from "../widget/StatusButtons/DeactivatedStatusButton";

describe("Deactivated status button rendred successfully", () => {
  it("renders", () => {
    render(<DeactivatedStatusButton />);
  });
});
