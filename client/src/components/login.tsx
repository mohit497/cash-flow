import { Container, Row, Col, Button, Form } from 'react-bootstrap'


export default function Login() {
    return (
        <Container className='m-5 p-5'>
            <Row className=' justify-content-center my-2'>
                <Col xs={6}> <Form.Control type="email" placeholder="Enter email" /> </Col>
            </Row>
            <Row className=' justify-content-center my-2'>
                <Col xs={6}><Form.Control type="password" placeholder="Password" /></Col>
            </Row>
            <Row className=' justify-content-center my-2'>
                <Col> <Button variant="primary" onClick={() => console.log("Primary")}>
                    Login
                </Button>
                </Col>
            </Row>
        </Container >
    )
}
