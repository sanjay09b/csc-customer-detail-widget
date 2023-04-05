import React from "react";
import { render } from "@testing-library/react";
import FraudStatusButton from "../widget/StatusButtons/FraudStatusButton";

describe("Fraud status button rendred successfully", () => {
  it("renders", () => {
    render(<FraudStatusButton />);
  });
});
