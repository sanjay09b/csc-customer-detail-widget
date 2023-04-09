import axios from "axios";
import { useEffect, useState } from "react";
import SeperationLine from "../SeperationLine/SeperationLine";
import CustomStyles from "../CustomStyles/CustomStyles";
import OrderedProductImage from "../orderedProductsimage/OrderedProductImage";
import OrderDetails from "../OrderDetails/OrderDetails";
import { TransactionDetails } from "../Interface";

const Transaction = () => {
  const [userData, setUserData] = useState<TransactionDetails[]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (loading) {
          const response = await axios.get(
            "https://6409df426ecd4f9e18bdd647.mockapi.io/api/v1/customers/641016776/transaction",
          );
          setUserData(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(userData);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className={CustomStyles.transactionHistory}>
          <div className={CustomStyles.header}>
            <div className={CustomStyles.transaction}>Transaction History</div>
            <div className={CustomStyles.viewAll}>
              <a href="#">View all $({userData.length})</a>
            </div>
          </div>
          <SeperationLine />
          {userData.map((data: TransactionDetails) => (
            <>
              <OrderDetails key={data.id} data={data} />
              <OrderedProductImage orderedProductsUrl={data.orderedProducts} />
              <div className="tw-mt-4">
                <SeperationLine />
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transaction;
