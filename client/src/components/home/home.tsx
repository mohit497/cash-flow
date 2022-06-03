import { useMyShopsQuery } from "generated/graphql";
import { Tabs, Tab, Breadcrumb, Container, Badge } from "react-bootstrap";
import { TransactionsTable } from "./transactions";

export default function Home() {
  const { data } = useMyShopsQuery();

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>{" "}
      <Tabs
        defaultActiveKey={data?.shops[0].id}
        transition={false}
        id="noanim-tab-example"
        className="my-2"
        variant="pills"
      >
        {data?.shops.map((shop) => {
          return (
            <Tab
              eventKey={shop.id}
              title={
                <span>
                  {shop.name} <Badge  bg="dark">{shop.location}</Badge>
                </span>
              }
            >
              <TransactionsTable shop_id={shop.id} />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
}
