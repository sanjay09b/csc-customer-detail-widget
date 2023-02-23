import { render } from "@testing-library/react";
import  {Widget}  from "../widget";
import React from 'react';

describe("Widget", () => {
  it("renders", () => {
    render(<Widget />);
  });
});