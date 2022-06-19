import { PaginationBasic } from "components/paginationBasic";
import { Transactions, useTransactionbyshopQuery } from "generated/graphql";
import { useState } from "react";
import {
  Table,
  Popover,
  OverlayTrigger,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FaClock, FaDollarSign, FaList, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { PAGE_SIZE } from "utils";

export const TransactionsTable = ({ shop_id }) => {
  const [page, setpage] = useState(1);
  const { data, refetch } = useTransactionbyshopQuery({
    variables: {
      _eq: shop_id,
    },
  });

  const onPageChange = (page: number) => {
    refetch({ offset: (page - 1) * PAGE_SIZE });
    setpage(page);
  };

  const calculateTotalAmount = (transaction: Transactions[]) => {
    const temp: number[] = transaction.map((t) => t.product.amount);

    return temp.reduce((partialSum, a) => partialSum + a, 0);
  };
  const calculateItemCount = (transaction: Transactions[]) => {
    const temp: number[] = transaction.map((t) => t.count);

    return temp.reduce((partialSum, a) => partialSum + a, 0);
  };

  const popover = (transactions: Transactions[]) => {
    return (
      <Popover id="popover-basic">
        <Popover.Header as="h4" className="text-center">
          Order
        </Popover.Header>
        <Popover.Body>
          {transactions.map((item) => {
            return (
              <ListGroup>
                <ListGroup.Item>{item.product.name}</ListGroup.Item>
              </ListGroup>
            );
          })}
        </Popover.Body>
      </Popover>
    );
  };

  return (
    <div className="transactions my-2">
      <Table responsive size="md">
        <thead>
          <tr>
            <th>#</th>
            <th>
              <FaClock /> Created At
            </th>
            <th>
              <FaUser /> Sold By
            </th>
            <th>
              <FaList /> Items
            </th>
            <th>
              <FaDollarSign /> Amount
            </th>
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
                <td>
                  {" "}
                  <OverlayTrigger
                    trigger={["hover", "click"]}
                    placement="right"
                    overlay={popover(record.transactions as Transactions[])}
                  >
                    <span>
                      {calculateItemCount(
                        record.transactions as Transactions[]
                      )}
                    </span>
                  </OverlayTrigger>
                </td>
                <td>
                  {calculateTotalAmount(record.transactions as Transactions[])}{" "}
                  Rs
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Col>
          <PaginationBasic
            className="float-right"
            onPageChange={onPageChange}
            active={page}
            total={Math.ceil(
              (data?.sales_aggregate.aggregate?.count || 0) / PAGE_SIZE
            )}
          />
        </Col>
      </Row>
    </div>
  );
};
