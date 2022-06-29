import { useGetTotalByShopsQuery } from "generated/graphql";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function TopProducts() {
  const { data } = useGetTotalByShopsQuery({
    variables: {
      limit: 4,
    },
  });

  return (
    <Container className="mx-0 mx-lg-5 px-0 px-lg-5" style={{ maxHeight: "300px" }}>
      <Row className="my-2 text-left">
        <Col>
          <DropdownButton variant="secondary" size="sm" title="Monthly">
            <Dropdown.Item eventKey="1">Weekly</Dropdown.Item>
            <Dropdown.Item eventKey="2">Yearly</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <ResponsiveContainer aspect={1} maxHeight={200}>
        <BarChart
          data={data?.total_sales_by_shop}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="shop_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="$primary" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
