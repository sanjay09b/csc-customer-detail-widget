import { render } from "@testing-library/react";
import React from "react";
import Payment from "../widget/payment/Payment";

describe("AccountDetails", () => {
  test("renders", () => {
    render(<Payment pay="Sephora" />);
  });
  test("renders", () => {
    render(<Payment pay="visa" />);
  });
});
