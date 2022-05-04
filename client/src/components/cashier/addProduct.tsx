import { useFindproductQuery } from 'generated/graphql'
import { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

interface Props {
    onFoundProduct: (product) => void;
    barcode?: string;
}

export default function AddProduct(props: Props) {

    const [code, setcode] = useState()

    const handleChange = (e) => {
        setcode(e.target.value)
    }

    useFindproductQuery({
        variables: {
            _iregex1: code
        },
        onCompleted: (data) => {
            if(data.products.length ===1){
                props.onFoundProduct(data.products[0])
            }
        }
    })


    return (
        <Row>
            <Col className="p-2">
                <Form.Control name="price" onChange={handleChange} value={code} type="text" placeholder="Product Code" />
            </Col>
        </Row>
    )
}
