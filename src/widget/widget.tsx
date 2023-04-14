import React from "react"; // we need this to make JSX compile
import "./style.css";
import Transaction from "./TransactionHistory/Transaction";

const Widget = (): JSX.Element | null => (
  <div className="tw-mx-6">
    <Transaction />
  </div>
);

export default Widget;
