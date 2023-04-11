import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import HeaderExport from "./CustomerHeader/HeaderExport";
import ExpandedNotesExport from "./ExpandedTable/ExpandedNotesExport";
import "./style.css";
import AccountDetailsExport from "./AccountAndBIDetails/AccountDetailsExport";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper">
    <div className="text-orange-600">
      <h2>{title}</h2>
    </div>
    <p className="my-custom-style">{paragraph}</p>
    <HeaderExport />
    <AccountDetailsExport />
    <ExpandedNotesExport />
  </div>
);

export default Widget;
