import moment from "moment";
import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./styles.scss";

export const DateSelect = ({ onDateChange }) => {
  const [date, setdate] = useState({ start: "", end: "" });

  useEffect(() => {
    onDateChange(date);
  }, [date]);

  useEffect(() => {
    setdate({
      start: moment().startOf("month").format("YYYY-MM-DD"),
      end: moment().endOf("month").format("YYYY-MM-DD"),
    });
  }, []);

  const handleChange = (e) => {
    setdate({ ...date, [e.target.name]: e.target.value });
  };

  return (
    <Row className="date-select">
      <Col>
        <Form.Control
          name="start"
          onChange={handleChange}
          type="date"
          placeholder="start Date"
          size="sm"
          value={date.start}
        />
        <p className=" hint text-black-50">
          {moment(date.start).format("MMMM-YYYY")}
        </p>
      </Col>
      <Col>
        <Form.Control
          onChange={handleChange}
          value={date.end}
          name="end"
          type="date"
          placeholder="End Date"
          size="sm"
        />
        <p className=" hint text-black-50">
          {moment(date.end).format("MMMM-YYYY")}
        </p>
      </Col>
    </Row>
  );
};
