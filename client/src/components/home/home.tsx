import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
// import { ShopTotal } from "./shopTotal";
import { TopSales } from "./charts/topSales";
import { ShopTotal } from "./shopTotal";
import { TopProducts } from "./charts/topProducts";

export default function Home() {
  return (
    <Container fluid className="px-0 px-lg-2 mx-0 mx-lg-2">
      <Row>
        <Col className="text-left">
          <h3>Sales</h3>
        </Col>
      </Row>
      <Row>
        <Col className="p-2 border">
          <TopSales />
        </Col>
      </Row>

      <Row>
        <Col lg={6} className="p-2 mt-2 p-lg-5 mt-lg-5 border">
          <ShopTotal />
        </Col>
        <Col lg={6} className="p-2 mt-2 p-lg-5 mt-lg-5 border">
          <TopProducts />
        </Col>
      </Row>
    </Container>
  );
}
