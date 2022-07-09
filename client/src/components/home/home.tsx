import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
// import { ShopTotal } from "./shopTotal";
import { TopSales } from "./charts/topSales";
import { ShopTotal } from "./shopTotal";
import { TopProducts } from "./charts/topProducts";
import { LowInventory } from "./charts/lowInventory";

export default function Home() {
  return (
    <Container fluid className="px-0 px-lg-2 mx-0 mx-lg-2">
      <Row>
        <Col className="text-left">
          <h3>Monthy Sales</h3>
        </Col>
      </Row>
      <Row>
        <ShopTotal />
      </Row>
      <Row>
        <Col className="p-2 m-2 m-lg-3 border">
          <TopSales />
        </Col>
      </Row>

      <Row className="gap-5 justify-content-center">
        <Col lg={5} className="p-2 m-0 m-lg-3 p-lg-2 border">
          <LowInventory />
        </Col>
        <Col lg={5} className="p-2 m-0 m-lg-3 p-lg-2  border">
          <TopProducts />
        </Col>
      </Row>
    </Container>
  );
}
