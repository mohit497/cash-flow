import {  useTop5ProductsDailyQuery } from "generated/graphql";
import { Container, Row, Col } from "react-bootstrap";
import {
  Bar,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export const TopProducts = () => {
  const { data } = useTop5ProductsDailyQuery({
    variables: {
      limit: 4,
    },
  });

  const graphData = data?.top_products_daily;

  return (
    <Container>
      <Row>
        <Col>Top Products</Col>
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
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="sum" fill="#20c997" />
          </ComposedChart>
        </ResponsiveContainer>
      </Row>
    </Container>
  );
};
