import React from "react"; // we need this to make JSX compile
import "./style.css";
import Notes from "./notes/Notes";

const Widget = (): JSX.Element | null => (
  <div className="widget-name-wrapper tw-mx-6">
    <Notes />
  </div>
);

export default Widget;
