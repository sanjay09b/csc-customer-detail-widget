import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
import PointHistory from "./PointHistory/PointHistory";
import RoughRewards from "./RougeRewards/RoughRewards";
import LinkedAccounts from "./LinkedAccounts/LinkedAccounts";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="mx-6 widget-name-wrapper">
    <PointHistory />
    <RoughRewards />
    <LinkedAccounts />
    <div className="text-orange-600">
      <h2>{title}</h2>
    </div>
    <p className="my-custom-style">{paragraph}</p>
  </div>
);

export default Widget;
