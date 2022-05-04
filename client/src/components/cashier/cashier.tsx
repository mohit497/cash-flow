import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import './style.scss'

import BarcodeReader from 'react-barcode-reader'
import Numpad from "./numpad";
import { Products, useFindproductQuery } from "generated/graphql";
import CashierHeader from "./header";
import AddProduct from "./addProduct";
import ItemsTable from "./itemsTable";


export default function Cashier() {
    const [barcode, setbarcode] = useState('')

    const [products, setproducts] = useState<Products[]>([]);

    const handleScan = (data) => {
        setbarcode(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    const onCustomFindProduct = (product) => {
        console.log(product)
        setproducts([...products, product]);
    }

    useFindproductQuery({
        variables: {
            _iregex1: barcode
        },
        onCompleted: (data) => {
            if (data.products.length === 1) {
                setproducts([...products, data.products[0] as Products])
            }
        }
    })

    const onDelete = (code) => {
        setproducts(products.filter((a, index) => index !== code))
    }

    const getTotal = () => {
        let amount = 0;
        products.map((a) => {
            amount = amount + a.amount
            return a;
        })

        return amount;
    }

    return (
        <div>
            <BarcodeReader
                onError={handleError}
                onScan={handleScan}
            />
            <CashierHeader />
            <Row>
                <Col xs={12} md={9} className="bill-col">
                    <AddProduct onFoundProduct={onCustomFindProduct} />
                    <ItemsTable onRemove={onDelete} products={products} />
                    <Row className="align-items-end">
                        <Col><h1> Total - {getTotal()} </h1></Col>
                    </Row>
                </Col>
                <Col className="info-col">
                    <Numpad />
                </Col>
            </Row>
        </div>
    )
}
