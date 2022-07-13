import { Monthly_Sales, useMonthlySalesQuery, useMyShopsQuery } from "generated/graphql";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getDate } from "utils";
import "./style.scss";

export const ShopTotal = () => {
  const { data: shops } = useMyShopsQuery();
  const { data } = useMonthlySalesQuery({
    variables: {
      limit: 5,
      _in: shops?.shops.map((i) => i.id) || [],
      _gte: getDate(1).start,
      _lte: getDate(1).end,
    },
  });

  const isProfit = (item: Monthly_Sales)=>{
  return item.total > item.total_cost;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center ">
        {data?.monthly_sales.map((item) => {
          return (
            <Col className="total-card  rounded " xs={6} lg={2}>
              <Card
                className=" shadow-sm"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col className=" border-end">
                        {" "}
                        <span className="total">{item.total - item.total_cost} Rs</span>{" "}
                      </Col>
                      <Col
                        className={
                          isProfit(item)
                            ? "text-success text-bold"
                            : "text-danger"
                        }
                      >
                        { isProfit(item) ? <FaArrowUp /> : <FaArrowDown />} {Math.round((item.total - item.total_cost)/ item.total_cost)}
                        %
                      </Col>
                    </Row>
                    <Row className="border-top mt-2 ">
                      <span className="name pt-2">
                        {item.name?.toUpperCase()}
                      </span>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
