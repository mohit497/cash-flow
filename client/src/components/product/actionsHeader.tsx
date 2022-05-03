import {  Col, Form, Row } from "react-bootstrap";

export default function ActionsHeader() {
    return (
        <Row className="jutify-content-around">
            <Col>  <Form.Group className="mb-3" controlId="search">
                <Form.Control type="text" placeholder="search" />
            </Form.Group></Col>
        </Row>
    )
}
