import { useMyShopsQuery } from "generated/graphql";
import { Tabs, Tab } from "react-bootstrap";
import {  TransactionsTable } from "./transactions";

export default function Home() {
  const { data } = useMyShopsQuery();

  return (
    <div>
      <Tabs
        defaultActiveKey={data?.shops[0].id}
        transition={false}
        id="noanim-tab-example"
        className="my-2"
        variant="pills"
      >
        {data?.shops.map((shop) => {
          return <Tab eventKey={shop.id} title={shop.name}>
              <TransactionsTable shop_id={shop.id} />
          </Tab>;
        })}
      </Tabs>
    </div>
  );
}
