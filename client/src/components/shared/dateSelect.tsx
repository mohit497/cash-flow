import moment from "moment";
import { Row, Col, Form } from "react-bootstrap";
import "./styles.scss";

interface Props {
  onDateChange: (date) => void;
  value: { start: string; end: string };
  hint?: string;
}

export const DateSelect = (props: Props) => {


  const handleChange = (e) => {
    props.onDateChange({ ...props.value, [e.target.name]: e.target.value });
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
          value={props.value.start}
        />
        <span className=" hint text-black-50">
          {moment(props?.value.start).format( props?.hint || "MMMM-YYYY")}
        </span>
      </Col>
      <Col>
        <Form.Control
          onChange={handleChange}
          value={props.value.end}
          name="end"
          type="date"
          placeholder="End Date"
          size="sm"
        />
        <span className=" hint text-black-50">
          {moment(props?.value?.end).format( props?.hint || "MMMM-YYYY")}
        </span>
      </Col>
    </Row>
  );
};
