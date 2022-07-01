import { PaginationBasic } from "components/paginationBasic";
import {
  Transactions,
  useMyShopsQuery,
  useTransactionbyshopQuery,
} from "generated/graphql";
import { useState } from "react";
import {
  Table,
  Popover,
  OverlayTrigger,
  ListGroup,
  Row,
  Col,
  Container,
  Badge,
  Tab,
  Tabs,
} from "react-bootstrap";
import { FaClock, FaDollarSign, FaList, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { PAGE_SIZE } from "utils";
import TransactionsChart from "./charts/transactionsChart";

export const TransactionsTable = () => {
  const [page, setpage] = useState(1);
  const [key, setKey] = useState<any>();
  const { data } = useMyShopsQuery({
    onCompleted: (res) => {
      setKey(res.shops[0].id);
    },
  });

  const { data: transactionData, refetch } = useTransactionbyshopQuery({
    variables: {
      _eq: key,
    },
  });

  const onPageChange = (page: number) => {
    refetch({ offset: (page - 1) * PAGE_SIZE });
    setpage(page);
  };

  const calculateTotalAmount = (transaction: Transactions[]) => {
    const temp: number[] = transaction.map((t) => t.price);

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


  const getChartData = ()=>{
    return transactionData?.sales.map((item)=>{
      return {...item, total: calculateTotalAmount(item?.transactions as Transactions[])}

    })
  }

  console.log(getChartData())

  return (
    <Container fluid className="transactions mt-4 p-2">
      <Tabs
        activeKey={key}
        transition={false}
        id="noanim-tab-example"
        className="my-4"
        variant="pills"
        onSelect={(k) => setKey(k)}
      >
        {data?.shops.map((shop) => {
          return (
            <Tab
              eventKey={shop.id}
              title={
                <span>
                  {shop.name.toUpperCase()}{" "}
                  <Badge bg="dark">{shop.location}</Badge>
                </span>
              }
            ></Tab>
          );
        })}
      </Tabs>
      <TransactionsChart key={key} data={getChartData()} />

      <Row>
        <h4>Transactions</h4>
      </Row>
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
          {transactionData?.sales.map((record, index) => {
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
              (transactionData?.sales_aggregate.aggregate?.count || 0) /
                PAGE_SIZE
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};
