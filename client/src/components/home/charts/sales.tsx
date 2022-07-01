import { useGetSalesByDateQuery } from "generated/graphql";
import { Container , Row} from "react-bootstrap";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Area
} from "recharts";

export default function Sales({ id, activetab }) {
  const { data } = useGetSalesByDateQuery({
    variables: {
      limit: 30,
      offset: 0,
      _eq: id,
    },
    fetchPolicy: "network-only",
    skip: !id || activetab !== id,
  });

  return (
    <Container style={{ height: "250px" }}>
      <Row>
        <h3>Sales</h3>
      </Row>

      <ResponsiveContainer  width="100%" height="100%">
        <ComposedChart
          data={data?.shop_sales_by_date}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
}
