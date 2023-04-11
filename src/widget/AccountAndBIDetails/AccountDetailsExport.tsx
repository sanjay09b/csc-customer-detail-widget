import CustomStyle from "../CustomStyles";
import SeparationLine from "../SeparationLine/SeparationLine";
import { AccountDetails } from "./AccountDetails";

const AccountDetailsExport = (): JSX.Element => {
  return (
    <div className={CustomStyle.exportWrapper}>
      <AccountDetails />
      <SeparationLine />
    </div>
  );
};

export default AccountDetailsExport;
