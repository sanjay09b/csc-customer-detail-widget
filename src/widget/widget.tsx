import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
import CustomerHeaderExport from "./CustomerHeaderExport/CustomerHeaderExport";
import EmailAndPreferences from "./EmailAndPreference/EmailAndPreferences";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper">
    <CustomerHeaderExport />
    <EmailAndPreferences />
    <h2>{title}</h2>
    <p className="my-custom-style md:bg-red-100 md:font-bold">{paragraph}</p>
  </div>
);

export default Widget;
