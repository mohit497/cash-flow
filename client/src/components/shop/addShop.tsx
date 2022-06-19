import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { GetshopsDocument, useAddshopMutation } from "generated/graphql";


interface ShopForm {
    name: string;
    address: string;
    location: string;
}

export default function AddShop() {

    const [form, setform] = useState<ShopForm>({
        name: '',
        address: '',
        location: ''
    })

    const [addShop] = useAddshopMutation();




    const handleAddProduct = () => {
        addShop({
            variables: {
                objects: {
                    name: form.name,
                    location: form.location,
                    address: form.address
                }
            },
            refetchQueries:[{ query: GetshopsDocument}]
        }).catch((e)=>{
            console.error(e)
        })
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }


    return (
        <Container className="my-2 ">
            <Row className="justify-content-around align-items-center">
                <Col>
                    <Form.Control name="name" onChange={handleChange} value={form.name} type="text" placeholder="Name" />
                </Col>
                <Col>
                    <Form.Control name="address" onChange={handleChange}  value={form.address} type="text" placeholder="address" />
                </Col>
                <Col >
                    <Form.Control onChange={handleChange}  name="location" value={form.location} type="text" placeholder="location" />
                </Col>
                <Col>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Add Shop
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
