import { render } from "@testing-library/react";
import React from "react";
import DateFormatter from "../widget/DateFormatter/DateFormatter";

describe("AccountDetails", () => {
  test("renders", () => {
    render(<DateFormatter />);
  });
});
