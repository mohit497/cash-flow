import { Divider } from "components/divider";
import ActionsHeader from "components/product/actionsHeader";
import { useGetshopsQuery } from "generated/graphql";
import { Breadcrumb, Container, Table } from "react-bootstrap";
import {  FaAddressCard, FaLocationArrow } from "react-icons/fa";
import AddShop from "./addShop";

export default function Shops() {
  const { data } = useGetshopsQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
  });
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Shops</Breadcrumb.Item>
      </Breadcrumb>
      <AddShop />
      <Divider />
      <ActionsHeader onSearch={() => {}} />
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Organisation</th>
            <th><FaAddressCard /> address</th>
            <th><FaLocationArrow /> location</th>
          </tr>
        </thead>
        <tbody>
          {data?.shops.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.orgByOrg.name}</td>
                <td>{item.address}</td>
                <td>{item?.location}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
