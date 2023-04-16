import { render } from "@testing-library/react";
import React from "react";
import AccountDetailsExport from "../widget/AccountAndBIDetails/AccountDetailsExport";

describe("AccountDetailsExport", () => {
  it("renders", () => {
    render(<AccountDetailsExport />);
  });
});
