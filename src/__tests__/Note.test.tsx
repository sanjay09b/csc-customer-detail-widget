import React from "react";
import { render } from "@testing-library/react";
import Note from "../widget/notes/Note";

describe("Note", () => {
  it("renders Note Component", () => {
    render(<Note />);
  });
});
