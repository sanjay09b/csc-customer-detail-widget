import React from "react";
import Header from "./Header";
import CustomStyle from "../CustomStyles";
import SeparationLine from "../SeparationLine/SeparationLine";

const HeaderExport = (): JSX.Element => {
  return (
    <div className={CustomStyle.exportWrapper}>
      <Header />
      <SeparationLine />
    </div>
  );
};

export default HeaderExport;
