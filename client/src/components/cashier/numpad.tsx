import { Button, Col, Row } from "react-bootstrap"

export default function Numpad() {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            <Row className="align-items-center">
                {
                    numbers.map((item) => {
                        return <Col xs={3} className="m-1"> 
                        <Button size="lg" variant="info" onClick={() => console.log("Info")}>
                            {item}
                        </Button></Col>
                    })
                }

            </Row>
        </div>
    )
}
