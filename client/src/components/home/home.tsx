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
          <h3>Sales</h3>
        </Col>
      </Row>
      <Row>
        <Col className="p-2 m-0 m-lg-5 border">
          <TopSales />
        </Col>
      </Row>

      <Row className="gap-5 justify-content-center">
        <Col lg={5} className="p-2 mt-2 p-lg-5 border">
          <ShopTotal />
        </Col>
        <Col lg={5} className="p-2 mt-2 p-lg-5  border">
          <TopProducts />
        </Col>
      </Row>
      <Row className="gap-5 justify-content-center">
        <Col lg={5} className="p-2 mt-2 p-lg-5 border">
          <LowInventory />
        </Col>

      </Row>
    </Container>
  );
}
