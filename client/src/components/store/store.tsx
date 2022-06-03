import { useAppState } from "appstate/useAppstate";
import Loading from "components/loader/loader";
import { Products, useGetinventoryQuery } from "generated/graphql";
import { useState } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import AddItem from "./addItem";

export default function Store() {
  const [name, setname] = useState();
  const handleChange = (e) => {
    setname(e.target.value);
  };

  const { setState, state } = useAppState();

  const { data, loading } = useGetinventoryQuery({
    variables: {
      limit: 10,
      offset: 0,
      _iregex: name,
    },
  });

  const onProductSelect = (id) => {
    setState({ ...state, selectedProduct: id });
  };

  return (
    <Container>
      {loading && <Loading />}
      <Breadcrumb>
        <Breadcrumb.Item active>Store</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="my-2 justify-content-center">
        <Col lg={9}>
          <FormControl
            placeholder="search by product name"
            aria-label="no of items"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={name}
          />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>code</th>
            <th>count</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((item, index) => {
            return (
              <tr key={index} onClick={() => onProductSelect(item.code)}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.code}</td>
                <td>{item.inventories_aggregate.aggregate?.sum?.count}</td>
                <td>
                  <AddItem {...(item as Products)} />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
