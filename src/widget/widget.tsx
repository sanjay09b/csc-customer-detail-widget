import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
import AccountInfo from "./AccountInfo/AccountInfo";
import PaymentAndCredits from "./PaymentAndCredits/PaymentAndCredit";

const Widget = ({
  title = " ",
  paragraph = " ",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper">
    <div className="text-orange-600">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
    <PaymentAndCredits />
    <AccountInfo />
  </div>
);

export default Widget;
