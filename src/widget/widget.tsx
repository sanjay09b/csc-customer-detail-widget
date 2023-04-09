import React from "react"; // we need this to make JSX compile
import { AccountDetails } from "./AccountAndBIDetails/AccountDetails";
import { WidgetProps } from "./Interface";
import "./style.css";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper tw-ml-6 tw-mr-6">
    <div className="text-orange-600">
      <h2>{title}</h2>
    </div>
    <p className="my-custom-style">{paragraph}</p>
    <AccountDetails />
  </div>
);

export default Widget;
