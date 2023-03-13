import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
// import Header from "./Header";
import PRL from "./PRL";
// import AccountInfo from "./AccountInfo";

const Widget = ({
  title = "",
  paragraph = "",
}: WidgetProps): JSX.Element | null => (
  <div className="mx-6 widget-name-wrapper">
    {/* <AccountInfo /> */}
    <PRL />
    {/* <Header /> */}
    <div className="text-orange-600">
      <h2>{title}</h2>
    </div>
    <p className="my-custom-style">{paragraph}</p>
  </div>
);

export default Widget;
