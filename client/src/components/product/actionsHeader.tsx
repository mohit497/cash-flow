import { Col, Form, Row } from "react-bootstrap";

export default function ActionsHeader() {
    return (
        <Row className="justify-content-center">
            <Col lg={9}>
                <Form.Group className="mb-3" controlId="search">
                    <Form.Control type="text" placeholder="search" />
                </Form.Group>
            </Col>
        </Row>
    )
}
