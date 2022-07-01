import { useGetTotalByShopsQuery } from "generated/graphql";
import { Container, Row, Col } from "react-bootstrap";
import {
  Bar,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import "./style.scss";

export const ShopTotal = () => {
  const { data } = useGetTotalByShopsQuery({
    variables: {
      limit: 4,
    },
  });

  const graphData = data?.total_sales_by_shop;

  return (
    <Container>
      <Row>
        <Col>Sales Till Date</Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <ComposedChart
            data={graphData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
            barSize={100 / Number(graphData?.length)}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="shop_name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#dee2e6" />
          </ComposedChart>
        </ResponsiveContainer>
      </Row>
    </Container>
  );
};
