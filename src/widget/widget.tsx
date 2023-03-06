import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import "./style.css";
import Header from "./Header";

const Widget = ({
  title = "Widget Boilterplate",
  paragraph = "This is a Sample Widget",
}: WidgetProps): JSX.Element | null => (
  <div className="widget-name-wrapper">
    <Header />
    <div className="text-orange-600">
      <h2>{title}</h2>
    </div>
    <p className="my-custom-style">{paragraph}</p>
  </div>
);

export default Widget;
