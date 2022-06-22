import { useMyShopsQuery } from "generated/graphql";
import { Tabs, Tab, Breadcrumb, Container, Badge } from "react-bootstrap";
import { TransactionsTable } from "./transactions";
import "./style.scss";
import { ShopTotal } from "./shopTotal";
import Sales from "./sales";
import { useState } from "react";

export default function Home() {
  const { data } = useMyShopsQuery({ variables: {} });
  const [key, setKey] = useState(data?.shops[0].id);

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>

      <ShopTotal />

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
