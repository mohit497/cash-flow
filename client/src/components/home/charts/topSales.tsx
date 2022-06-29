import {
  useMonthlySalesQuery,
  useWeeklySalesQuery,
  useYearlySalesQuery,
} from "generated/graphql";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  Bar,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

enum VIEWS {
  "YEARLY",
  "WEEKLY",
  "MONTHLY",
}

export function TopSales() {
  const [view, setview] = useState(VIEWS[VIEWS.WEEKLY]);
  const [graphData, setgraphData] = useState<any[]>([]);

  const { refetch: fetchWeekly } = useWeeklySalesQuery({
    skip: view !== VIEWS[VIEWS.WEEKLY],
    onCompleted: (res) => {
      setgraphData(res?.weekly_sales);
    },
  });

  const { refetch: yearlySales } = useYearlySalesQuery({
    skip: view !== VIEWS[VIEWS.YEARLY],
    onCompleted: (res) => {
      setgraphData(res?.yearly_sales);
    },
  });
  const { refetch: monthlySales } = useMonthlySalesQuery({
    skip: view !== VIEWS[VIEWS.MONTHLY],
    onCompleted: (res) => {
      setgraphData(res?.monthly_sales);
    },
  });

  const handleChange = (e) => {
    if (e.target.value === VIEWS[VIEWS.WEEKLY].toLowerCase()) {
      fetchWeekly();
    } else if (e.target.value === VIEWS[VIEWS.YEARLY].toLowerCase()) {
      yearlySales();
    } else if (e.target.value === VIEWS[VIEWS.MONTHLY].toLowerCase()) {
      monthlySales();
    }
    setview(e.target.value.toUpperCase());
  };

  return (
    <Container
      className="mx-0 mx-lg-5 px-0 px-lg-5"
      style={{ maxHeight: "300px" }}
    >
      <Row className="my-2 text-left">
        <Col>
          <Form.Select
            onChange={handleChange}
            defaultValue={view}
            style={{ width: "120px" }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Form.Select>
        </Col>
      </Row>
      <ResponsiveContainer aspect={1} maxHeight={200}>
        <ComposedChart
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={100 / Number(graphData?.length)}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="total"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="total" fill="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
}
