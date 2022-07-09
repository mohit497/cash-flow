import { DateSelect } from "components/shared/dateSelect";
import {  useTop5ProductsDailyQuery } from "generated/graphql";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Bar,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { getDate } from "utils";

export const TopProducts = () => {
  const [date, setdate] = useState(getDate(1, 'd'));

  const { data } = useTop5ProductsDailyQuery({
    variables: {
      limit: 4,
      _gte: date.start,
      _lte: date.end
    },
  });

  
  const graphData = data?.top_products_daily;

  const handleDateChange = (date) => {
    setdate(date);
  };

  return (
    <Container>
      <Row >
        <Col className="my-2">Top Products</Col>
        <Col xs={12}>
          <DateSelect hint="dd-D-MMM" value={date} onDateChange={handleDateChange} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center p-3">
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
