import { DateSelect } from "components/shared/dateSelect";
import { ShopSelect } from "components/shared/shopSelect";
import {
  useDailySalesQuery,
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
  "DAILY"
}

export function TopSales() {
  const [view, setview] = useState(VIEWS[VIEWS.DAILY]);
  const [graphData, setgraphData] = useState<any[]>([]);
  const [date, setdate] = useState(getDate(1));
  const [selectedShop, setselectedShop] = useState<string[]>([]);

  useWeeklySalesQuery({
    skip: view !== VIEWS[VIEWS.WEEKLY] || date.start === "",
    onCompleted: (res) => {
      setgraphData(res?.weekly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
      _in: selectedShop,
    },
  });

  useYearlySalesQuery({
    skip: view !== VIEWS[VIEWS.YEARLY] || date.start === "",
    onCompleted: (res) => {
      setgraphData(res?.yearly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
      _in: selectedShop,
    },
  });
  useMonthlySalesQuery({
    skip: view !== VIEWS[VIEWS.MONTHLY] || date.start === "",
    onCompleted: (res) => {
      setgraphData(res?.monthly_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
      _in: selectedShop,
    },
  });
  useDailySalesQuery({
    skip: view !== VIEWS[VIEWS.DAILY] || date.start === "",
    onCompleted: (res) => {
      setgraphData(res?.daily_sales);
    },
    variables: {
      _gte: date.start,
      _lte: date.end,
      _in: selectedShop,
    },
  });

  const handleChange = (e) => {
    if (e.target.value === VIEWS[VIEWS.WEEKLY].toLowerCase()) {
      setdate(getDate(1));
    } else if (e.target.value === VIEWS[VIEWS.MONTHLY].toLowerCase()) {
      setdate(getDate(6));
    } else if (e.target.value === VIEWS[VIEWS.YEARLY].toLowerCase()) {
      setdate(getDate(12));
    } else if (e.target.value === VIEWS[VIEWS.DAILY].toLowerCase()) {
      setdate(getDate(1));
    }
    setview(e.target.value.toUpperCase());
  };

  const handleDateChange = (date) => {
    setdate(date);
  };

  const xtickFomart = (data) => {
    if (view === VIEWS[VIEWS.WEEKLY].toString()) {
      return `${moment(data).week().toString()}-${moment(data).format("MMMM")}`;
    }
    if (view === VIEWS[VIEWS.YEARLY].toString()) {
      return moment(data).year().toString();
    }
    if (view === VIEWS[VIEWS.MONTHLY].toString()) {
      return moment(data).format("MMMM-YYYY");
    }
    if (view === VIEWS[VIEWS.DAILY].toString()) {
      return moment(data).format("ll");
    }
    return moment(data).format("ll");
  };

  const ytickFomart = (data) => {
    return `${data / 1000} K`;
  };

  // const toolTipFormatter = (payload, name, props) => {
  //   return [
  //     `${props.payload.total}`,
  //     `${props.payload.name}`,
  //     `${props.payload.total_cost}`,
  //   ];
  // };

  const handleShopSelect = (shop: string[]) => {
    setselectedShop(shop);
  };

  return (
    <Container
      className="mx-0 mx-lg-5 px-0 px-lg-5"
      style={{ maxHeight: "500px" }}
    >
      <Row className="my-2 p-2 text-left gap-1">
        <Col>
          <Form.Select
            size="sm"
            onChange={handleChange}
            defaultValue={view}
            style={{ width: "120px" }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Form.Select>
        </Col>
        <Col xs={12} lg={4}>
          <DateSelect value={date} onDateChange={handleDateChange} />
        </Col>
        <Col xs={12} lg={2}>
          <ShopSelect size="sm" onShopSelect={handleShopSelect} />
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
          <YAxis tickFormatter={ytickFomart} />
          <Tooltip   />
          <Legend />
          <Area
            type="monotone"
            dataKey="total_cost"
            fill="#dee2e6"
            stroke="#dee2e9"
          />

          <Bar name="Sale" dataKey="total" stackId="a" fill="#8884d8" />

        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
}

function getDate(no: number) {
  return {
    start: moment(new Date()).subtract(no, "months").format("YYYY-MM-DD"),
    end: moment(new Date()).format("YYYY-MM-DD"),
  };
}
