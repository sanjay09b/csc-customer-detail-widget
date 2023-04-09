import React from "react"; // we need this to make JSX compile
import "./style.css";
import Transaction from "./TransactionHistory/Transaction";

const Widget = (): JSX.Element | null => (
  <div>
    <Transaction />
  </div>
);

export default Widget;
