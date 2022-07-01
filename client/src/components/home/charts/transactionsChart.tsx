import { DateSelect } from "components/shared/dateSelect";
import moment from "moment";
import { Col, Container, Row } from "react-bootstrap";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Area,
} from "recharts";

export default function TransactionsChart({ data }) {
  const formatDate = (data) => {
    return moment(data).format("ll");
  };

  return (
    <Container style={{ height: "350px" }}>
      <Row>
        <Col xs={12} lg={4} >
           <DateSelect onDateChange={() => {}}></DateSelect>
        </Col>
        <Col xs={12} lg={8} >
         <h3>Sales</h3>
        </Col>
      </Row>

      <ResponsiveContainer width="100%" height="80%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="createdAt" scale="band" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="total" fill="#8884d8" />
          <Bar dataKey="total" barSize={100 / data?.length} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
}
