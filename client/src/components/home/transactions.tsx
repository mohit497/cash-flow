import { Transactions, useTransactionbyshopQuery } from "generated/graphql";
import { Table } from "react-bootstrap";
import { FaClock, FaDollarSign, FaList, FaUser } from "react-icons/fa";
import Moment from "react-moment";

export const TransactionsTable = ({ shop_id }) => {
  const { data } = useTransactionbyshopQuery({
    variables: {
      _eq: shop_id,
    },
  });

  const calculateTotalAmount = (transaction: Transactions[]) => {
    const temp: number[] = transaction.map((t) => t.product.amount);

    return temp.reduce((partialSum, a) => partialSum + a, 0);
  };
  const calculateItemCount = (transaction: Transactions[]) => {
    const temp: number[] = transaction.map((t) => t.count);

    return temp.reduce((partialSum, a) => partialSum + a, 0);
  };

  return (
    <div className="transactions my-2">
      <Table responsive  hover size="md">
        <thead>
          <tr>
            <th>#</th>
            <th><FaClock /> Created At</th>
            <th><FaUser /> Sold By</th>
            <th><FaList /> Items</th>
            <th><FaDollarSign /> Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.sales.map((record, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <Moment format="LLL">{record.createdAt}</Moment>
                </td>
                <td>{record.active_role?.userByUser.name}</td>
                <td>{calculateItemCount(record.transactions as Transactions[])}</td>
                <td>
                  {calculateTotalAmount(record.transactions as Transactions[])}{" "}
                  Rs
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
