import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./styles.scss";

export const DateSelect = ({ onDateChange }) => {
  const [date, setdate] = useState({ start: null, end: null });

  useEffect(() => {
    onDateChange(date);
  }, [date]);

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
        />
      </Col>
      <Col>
        <Form.Control name="end" type="date" placeholder="End Date" size="sm" />
      </Col>
    </Row>
  );
};
