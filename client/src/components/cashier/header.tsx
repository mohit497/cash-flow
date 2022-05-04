import { useAppState } from 'appstate/useAppstate'
import {  useSoldMutation } from 'generated/graphql'
import { Row, Col, Button } from 'react-bootstrap'

export default function CashierHeader() {

    const { setProducts, state} = useAppState()
    console.log(state);

    const [addtransaction] = useSoldMutation()

    const reset = ()=>{
        setProducts([])
    }

    const getTransction = ()=>{
        return state.products.map((item)=>{
            return {
                count: 1,
                p_code: item.code
            }
        })
    }

    const sold = ()=>{
        addtransaction({
            variables:{
                org:"26e434c0-4114-44c8-adb7-adeaea4e7d70",
                shop:"eb7877aa-6a56-49aa-846f-c095d9e81f14",
                user:"dda031eb-f8b4-4e29-8b52-de2a46cfb8c2",
                data:getTransction()
            }
        }).then((a)=>{
            setProducts([])
            console.log(a)
        }).catch((e)=>{
            console.error(e)
        })

    }

  return (
    <Row className="top-row justify-content-around align-items-center  my-1">
                <Col className="top-card">
                    <Button variant="primary" onClick={() => console.log("Primary")}>
                        User
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="danger" onClick={reset}>
                        Reset
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="info" onClick={() => console.log("Primary")}>
                        Product Info
                    </Button>
                </Col>
                <Col className="top-card">
                    <Button variant="success" onClick={sold}>
                        Sold
                    </Button>
                </Col>
            </Row>
  )
}
