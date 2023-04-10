import { useEffect, useState } from "react";
import axios from "axios";
import VerticalLine from "../SeparationLine/VerticalLine";
import RedirectButton from "../Buttons/RedirectButton";
import { CustomerHeader } from "../Interface";
import StatusButtons from "../Buttons/StatusButtons";
import CustomStyle from "../CustomStyles";

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
          <div className={CustomStyle.customerHeader.alignRow}>
            <div className={CustomStyle.customerHeader.nameStatusWrapper}>
              <div className={CustomStyle.customerHeader.name}>
                {userData.firstName} {userData.lastName}
              </div>
              <StatusButtons status={userData.activeStatus} />
            </div>
            <div className={CustomStyle.customerHeader.redirectPositionWrapper}>
              <div
                className={CustomStyle.customerHeader.sephoraRedirectWrapper}
              >
                <span className={CustomStyle.customerHeader.sephoraRedirect}>
                  Visit client on Sephora.com
                </span>
                <RedirectButton />
              </div>
            </div>
          </div>
          <div className={CustomStyle.customerHeader.alignRowWithSpace}>
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.email}
            </div>
            <VerticalLine />
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.phoneNumber}
            </div>
            <VerticalLine />
            <div className={CustomStyle.customerHeader.centerAlign}>
              {userData.risk}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
