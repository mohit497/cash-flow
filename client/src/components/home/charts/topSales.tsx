import { DateSelect } from "components/shared/dateSelect";
import { ShopSelect } from "components/shared/shopSelect";
import {
  useMonthlySalesQuery,
  useWeeklySalesQuery,
  useYearlySalesQuery,
} from "generated/graphql";
import moment from "moment";
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
  // CartesianGrid,
} from "recharts";

enum VIEWS {
  "YEARLY",
  "WEEKLY",
  "MONTHLY",
}

export function TopSales() {
  const [view, setview] = useState(VIEWS[VIEWS.WEEKLY]);
  const [graphData, setgraphData] = useState<any[]>([]);
  const [date, setdate] = useState({ start: "", end: "" });

  const { refetch: fetchWeekly } = useWeeklySalesQuery({
    skip: view !== VIEWS[VIEWS.WEEKLY],
    onCompleted: (res) => {
      setgraphData(res?.weekly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
    },
  });

  const { refetch: yearlySales } = useYearlySalesQuery({
    skip: view !== VIEWS[VIEWS.YEARLY],
    onCompleted: (res) => {
      setgraphData(res?.yearly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
    },
  });
  const { refetch: monthlySales } = useMonthlySalesQuery({
    skip: view !== VIEWS[VIEWS.MONTHLY],
    onCompleted: (res) => {
      setgraphData(res?.monthly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
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

  const handleDateChange = (date) => {
    setdate(date);
  };

  const xtickFomart = (data) => {

    if(view === VIEWS[VIEWS.WEEKLY].toString()){
      return `${moment(data).week().toString()}-${moment(data).format('MMMM')}`
    } 
    if(view === VIEWS[VIEWS.YEARLY].toString()){
      return moment(data).year().toString()
    } 
    if(view === VIEWS[VIEWS.MONTHLY].toString()){
      return moment(data).format('MMMM-YYYY')
    } 
    return moment(data).format("ll");
  };

  const toolTipFormatter= (payload, value, props)=>{
    return [`${props.payload.total}`, `${props.payload.name}`]
  }

  return (
    <Container
      className="mx-0 mx-lg-5 px-0 px-lg-5"
      style={{ maxHeight: "350px" }}
    >
      <Row className="my-2 p-2 text-left gap-1">
        <Col>
          <Form.Select
            size="sm"
            onChange={handleChange}
            defaultValue={view}
            style={{ width: "120px" }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Form.Select>
        </Col>
        <Col xs={12} lg={4}>
          <DateSelect onDateChange={handleDateChange} />
        </Col>
        <Col lg={2} xs={12}>
          <ShopSelect size="sm" />
        </Col>
      </Row>
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
          <XAxis tickFormatter={xtickFomart} dataKey={view.toLowerCase()} />
          <YAxis />
          <Tooltip formatter={toolTipFormatter} />
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
