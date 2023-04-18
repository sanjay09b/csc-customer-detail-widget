import React from "react"; // we need this to make JSX compile
import AccountDetailsExport from "./AccountAndBIDetails/AccountDetailsExport";
import { WidgetProps } from "./Interface";
import "./style.css";

const Widget = ({ title = "" }: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper tw-ml-6 tw-mr-6">
    <div>
      <h2>{title}</h2>
    </div>
    <AccountDetailsExport />
  </div>
);

export default Widget;
