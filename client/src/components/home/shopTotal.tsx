import { useGetTotalByShopsQuery } from "generated/graphql";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.scss";

export const ShopTotal = () => {
  const { data } = useGetTotalByShopsQuery({
      variables:{
          limit: 4
      }
  });

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {data?.total_sales_by_shop.map((item) => {
          return (
            <Col className="total-card " xs={6} lg={2}>
              <Card className="shadow" style={{ width: "100%", height:'100%' }}>
                <Card.Body>
                  <Card.Text>
                    <span className="total">{item.total} Rs</span>{" "}
                    <div className="divider"></div>
                    <span className="name">{item.shop_name?.toUpperCase()}</span>
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
