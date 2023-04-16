import { useEffect, useState } from "react";
import axios from "axios";
import VerticalLine from "../SeparationLine/VerticalLine";
import RedirectButton from "../Buttons/RedirectButton";
import { CustomerHeader } from "../Interface";
import StatusButtons from "../Buttons/StatusButtons";
import customStyle from "../customStyle";

const Header = (): JSX.Element => {
  const [userData, setUserData] = useState<CustomerHeader>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url: string =
      "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/customers/641016776/customer";
    async function getUserData(): Promise<void> {
      try {
        const response = await axios.get(url);
        setUserData(response.data.customerDetails[0]);
      } catch (error) {
        //  console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={customStyle.customerHeader.alignRow}>
            <div className={customStyle.customerHeader.nameStatusWrapper}>
              <div className={customStyle.customerHeader.name}>
                {userData.firstName} {userData.lastName}
              </div>
              <StatusButtons status={userData.activeStatus} />
            </div>
            <div className={customStyle.customerHeader.redirectPositionWrapper}>
              <div
                className={customStyle.customerHeader.sephoraRedirectWrapper}
              >
                <span className={customStyle.customerHeader.sephoraRedirect}>
                  Visit client on Sephora.com
                </span>
                <RedirectButton />
              </div>
            </div>
          </div>
          <div className={customStyle.customerHeader.alignRowWithSpace}>
            <div className={customStyle.customerHeader.centerAlign}>
              {userData.email}
            </div>
            <VerticalLine />
            <div className={customStyle.customerHeader.centerAlign}>
              {userData.phoneNumber}
            </div>
            <VerticalLine />
            <div className={customStyle.customerHeader.centerAlign}>
              {userData.risk}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
