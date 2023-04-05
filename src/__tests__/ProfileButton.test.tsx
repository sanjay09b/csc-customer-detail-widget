import React from "react";
import { render } from "@testing-library/react";
import ProfileButton from "../widget/NotesTypeButtons/ProfileButton";

describe("Profile button rendred successfully", () => {
  it("renders", () => {
    render(<ProfileButton />);
  });
});
