import { Row, Col, Button } from 'react-bootstrap'

export default function CashierHeader() {
  return (
    <Row className="top-row justify-content-around align-items-center  my-1">
                <Col className="top-card">
                    <Button variant="primary" onClick={() => console.log("Primary")}>
                        User
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="danger" onClick={() => console.log("Primary")}>
                        Reset
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="info" onClick={() => console.log("Primary")}>
                        Product Info
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="success" onClick={() => console.log("Primary")}>
                        Sold
                    </Button>
                </Col>
            </Row>
  )
}
