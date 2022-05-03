import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import './style.scss'

import BarcodeReader from 'react-barcode-reader'
import Numpad from "./numpad";


export default function Cashier() {
    const [barcode, setbarcode] = useState('')

    const handleScan = (data) => {
        setbarcode(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    const handleChange = (e) => {
        setbarcode(e.target.value)
    }

    return (
        <div>
            <BarcodeReader
                onError={handleError}
                onScan={handleScan}
            />
            <Row className="top-row justify-content-around align-items-center  m-2">
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
            <Row>
                <Col xs={12} md={9} className="bill-col">
                    <Row>
                        <Col className="p-2">
                            <Form.Control name="price" onChange={handleChange} value={barcode} type="text" placeholder="Product Code" />
                        </Col>
                    </Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>


                </Col>
                <Col className="info-col">
                    <Numpad />
                </Col>
            </Row>
        </div>
    )
}
