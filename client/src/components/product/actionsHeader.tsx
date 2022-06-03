import { Col, Form, Row } from "react-bootstrap";

export default function ActionsHeader({ onSearch }) {
  return (
    <Row className="justify-content-center">
      <Col lg={9}>
        <Form.Group className="mb-3" controlId="search">
          <Form.Control
            onChange={(e) => onSearch(e.target.value)}
            type="text"
            placeholder="search"
          />
        </Form.Group>
      </Col>
    </Row>
  );
}
