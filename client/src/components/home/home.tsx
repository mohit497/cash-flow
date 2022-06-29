import { useMyShopsQuery } from "generated/graphql";
import { Tabs, Tab, Container, Badge, Row, Col } from "react-bootstrap";
import { TransactionsTable } from "./transactions";
import "./style.scss";
// import { ShopTotal } from "./shopTotal";
import Sales from "./sales";
import { useState } from "react";
import { TopSales } from "./charts/topSales";

export default function Home() {
  const { data } = useMyShopsQuery({ variables: {} });
  const [key, setKey] = useState(data?.shops[0].id);

  return (
    <Container fluid>
      <Row>
        <Col className="text-left">
          <h3>Sales</h3>
        </Col>
      </Row>

      {/* <ShopTotal /> */}

      <TopSales />

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
      <Sales id={key} activetab={key} />
      <TransactionsTable shop_id={key} />
    </Container>
  );
}
