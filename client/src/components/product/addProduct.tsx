import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BarcodeReader from 'react-barcode-reader'
import './style.scss'
import { useAddproductMutation , GetproductsDocument } from "generated/graphql";
import useNotifications from "hooks/useNotifications";

var Barcode = require('react-barcode');

interface ProductForm {
    name: string;
    price: number;
    total: number;
}

export default function AddProduct() {
    const [barcode, setbarcode] = useState('123456789012');
    const { showNotifications  } = useNotifications()

    const [form, setform] = useState<ProductForm>({
        name: '',
        price: 0,
        total: 0
    })

    const [addproductMutation] = useAddproductMutation();


    const handleScan = (data) => {
        setbarcode(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    const handleAddProduct = () => {
        addproductMutation({
            variables: {
                objects: {
                    name: form.name,
                    amount: form.price,
                    code: barcode,
                    org:"26e434c0-4114-44c8-adb7-adeaea4e7d70"
                }
            },
            refetchQueries:[{ query: GetproductsDocument}]
        }).catch((e)=>{
            console.error(e)
        }).then(()=>{
            showNotifications('product added ', "success")
        })
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }


    return (
        <Container className="my-2 ">
            <BarcodeReader
                onError={handleError}
                onScan={handleScan}
            />
            <Row className="justify-content-around align-items-center">
                <Col>
                    <Form.Control name="name" onChange={handleChange} value={form.name} type="text" placeholder="Name" />
                </Col>
                <Col>
                    <Form.Control name="price" onChange={handleChange}  value={form.price} type="text" placeholder="Price" />
                </Col>
                <Col xs={3} className="bar-code">
                    <Barcode value={barcode} />
                </Col>
                <Col  >
                    <Form.Control onChange={handleChange}  name="total" value={form.total} type="text" placeholder="total units" />
                </Col>
                <Col>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Add
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
