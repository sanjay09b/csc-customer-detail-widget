import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SeperationLine from "../SeperationLine/SeperationLine";
import customStyle from "../customStyle";
import OrderedProductImage from "../orderedProductsimage/OrderedProductImage";
import OrderDetails from "../OrderDetails/OrderDetails";
import { TransactionDetails } from "../Interface";

const Transaction = () => {
  const [userData, setUserData] = useState<TransactionDetails[]>();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        if (loading) {
          const response = await axios.get(
            "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/customers/641016776/transaction",
          );
          if (response.data.length < 3) {
            setUserData(response.data);
            setCount(response.data.length);
            setLoading(false);
          } else {
            setUserData(response.data.slice(0, 3));
            setCount(response.data.length);
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {userData && (
            <div className={customStyle.transactionHistory}>
              <div className={customStyle.transactionHeader}>
                <div className={customStyle.transaction}>
                  Transaction History
                </div>
                <div className={customStyle.transactionViewAll}>
                  <NavLink to="#">View all ({count})</NavLink>
                </div>
              </div>
              <SeperationLine />
              {userData.map((data: TransactionDetails) => (
                <>
                  <OrderDetails key={data.id} data={data} />
                  <OrderedProductImage
                    orderedProductsUrl={data.orderedProducts}
                  />
                  <SeperationLine />
                </>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Transaction;
