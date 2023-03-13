import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
import CustomerAddress from "./CustomerAddress/CustomerAddress";
import Subscription from "./subscriptions/Subscription";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper ml-12">
    <div className="text-orange-600">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
    <CustomerAddress />
    <Subscription />
  </div>
);

export default Widget;
