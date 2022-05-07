import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface LoginForm {
    username: string;
    password: string;
}

export default function Login() {
    const { login, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [form, setform] = useState<LoginForm>({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        login(form.username, form.password).then((a)=>{
            navigate('/')
        })
    }

    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/')
        }
    }, [isLoggedIn, navigate])


    return (
        <Container className='m-5 p-5'>
            <Row className=' justify-content-center my-2'>
                <Col xs={6}> <Form.Control name="username" type="email" placeholder="Enter email" onChange={handleChange} /> </Col>
            </Row>
            <Row className=' justify-content-center my-2'>
                <Col xs={6}><Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} /></Col>
            </Row>
            <Row className=' justify-content-center my-2'>
                <Col> <Button variant="primary" onClick={handleSubmit}>
                    Login
                </Button>
                </Col>
            </Row>
        </Container >
    )
}
