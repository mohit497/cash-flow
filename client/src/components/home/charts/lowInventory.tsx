import { useLowInventoryProductsQuery } from "generated/graphql";
import { Row, Table , Col} from "react-bootstrap";

export const LowInventory = () => {
  const { data } = useLowInventoryProductsQuery({
    variables: {
      limit: 5,
    },
  });
  return (
    <Row>
      <Col className="mb-2" xs={12}>
        <h3>Low Inventory</h3>
      </Col>
      <Col>
        <Table bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Left</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {data?.products_in_store.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.total_products}</td>
                  <td>{item.total_products}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
