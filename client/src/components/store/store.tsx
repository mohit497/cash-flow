import { useAppState } from "appstate/useAppstate";
import Loading from "components/loader/loader";
import {  useGetinventoryQuery } from "generated/graphql";
import { useState } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import AddItem from "./addItem";
import BarcodeReader from "react-barcode-reader";
import "./style.scss";

var Barcode = require("react-barcode");

export interface SearchForm {
  name: string;
  code: string;
}

export default function Store() {
  const [form, setform] = useState<SearchForm>({
    name: "",
    code: "",
  });
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleScan = (data) => {
    setform({ ...form, code: data });
  };
  const handleError = (err) => {
    console.error(err);
  };

  const { setState, state } = useAppState();

  const { data, loading } = useGetinventoryQuery({
    variables: {
      limit: 10,
      offset: 0,
      _iregex: form.name,
      _iregex1: form.code,
    },
  });

  const onProductSelect = (id) => {
    setState({ ...state, selectedProduct: id });
  };

  return (
    <Container className="store">
      {loading && <Loading />}
      <BarcodeReader onError={handleError} onScan={handleScan} />

      <Breadcrumb>
        <Breadcrumb.Item active>Store</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="my-2 justify-content-center">
        <Col>
          <FormControl
            name="name"
            placeholder="search by product name"
            aria-label="no of items"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={form.name}
          />
        </Col>
        <Col>
          <FormControl
            placeholder="search by product name"
            aria-label="no of items"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            name="code"
            value={form.code}
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
            <th>In Stock</th>
            <th>sold</th>
            <th>Add</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {data?.products_in_store.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item.name}</td>
                <td className="bar-code">
                  <Barcode value={item.p_code} />
                </td>
                <td>{item.total_products - item.sold_products?.sold}</td>
                <td>{item.sold_products?.sold || 0}</td>
                <td className="add-item">
                  <AddItem product_code={item.p_code} />{" "}
                </td>
                <td className="add-item align-items-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => onProductSelect(item.p_code)}
                  >
                    Batches
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
