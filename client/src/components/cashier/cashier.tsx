import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "./style.scss";

import BarcodeReader from "react-barcode-reader";
import Numpad from "./numpad";
import {
  Products,
  Sales,
  useFindproductQuery,
  useGetsalesQuery,
} from "generated/graphql";
import CashierHeader from "./header";
import AddProduct from "./addProduct";
import ItemsTable from "./itemsTable";
import { useAppState } from "appstate/useAppstate";
import SaleCard from "./saleCard";
import { SelectShopModal } from "./selectShopModal";
import { Divider } from "components/divider";

export default function Cashier() {
  const [barcode, setbarcode] = useState("");

  const { state, setProducts } = useAppState();

  const handleScan = (data) => {
    setbarcode(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  const onCustomFindProduct = (product) => {
    console.log(product);
    setProducts([...state.products, product]);
  };

  useFindproductQuery({
    variables: {
      _iregex1: barcode,
    },
    onCompleted: (data) => {
      if (data.products.length === 1) {
        setProducts([...state.products, data.products[0] as Products]);
      }
    },
  });

  const onDelete = (code) => {
    setProducts(state.products.filter((a, index) => index !== code));
  };

  const getTotal = () => {
    let amount = 0;
    state.products.map((a) => {
      amount = amount + a.amount;
      return a;
    });

    return amount;
  };

  const { data } = useGetsalesQuery({
    variables: {
      limit: 10,
    },
  });

  return (
    <Container fluid className="mx-0 mx-lg-5 px-0 p-lg-5">
      <BarcodeReader onError={handleError} onScan={handleScan} />
      <Row>
        <Col xs={12} md={9} className="bill-col">
          <AddProduct onFoundProduct={onCustomFindProduct} />
          <ItemsTable onRemove={onDelete} products={state.products} />
          <Row className="align-items-end">
            <Col>
              <h1> Total - {getTotal()} </h1>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="info-col d-none d-md-block">
          <Numpad />
        </Col>
      </Row>
      <CashierHeader />
      <Divider />
      <Row className="my-1">
        <h3>History</h3>
        {data?.sales.map((sale) => {
          return (
            <Col xs={12}>
              <ListGroup as="ol" numbered>
                <SaleCard {...(sale as Sales)} />
              </ListGroup>
            </Col>
          );
        })}
      </Row>
      <SelectShopModal show={!Boolean(state.selectedShop?.id)} />
    </Container>
  );
}
