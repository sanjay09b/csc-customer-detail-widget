import React from "react"; // we need this to make JSX compile
import "./style.css";
import HeaderExport from "./CustomerHeader/HeaderExport";
import ExpandedNotesExport from "./ExpandedTable/ExpandedNotesExport";

const Widget = (): JSX.Element | null => (
  <div className="widget-name-wrapper">
    <HeaderExport />
    <ExpandedNotesExport />
  </div>
);

export default Widget;
