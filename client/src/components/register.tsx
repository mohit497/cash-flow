import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Captcha } from "./captcha";
import "./style.scss";

export interface RegisterForm {
  orgname: string;
  name: string;
  password: string;
  email: string;
  confirmpassword: string;
}

export default function Register() {
  const { isLoggedIn, register } = useAuth();
  const navigate = useNavigate();
  const [isrealuser, setisrealuser] = useState(false);
  const onCaptchaSuccess = () => {
    setisrealuser(true);
  };

  const [form, setform] = useState<RegisterForm>({
    orgname: "",
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    register(form);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container className="m-5 p-5 register-form mx-auto">
      <Row hidden={!isrealuser} className=" justify-content-center my-5">
        <Col xs={12} lg={3}>
          <Form.Control
            size="sm"
            name="orgname"
            type="text"
            placeholder="Enter organisation Name"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            size="sm"
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12} lg={3}>
          <Form.Control
            size="sm"
            name="email"
            type="text"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row hidden={!isrealuser} className=" justify-content-center my-2">
        <Col>
          <Form.Control
            size="sm"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            size="sm"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row hidden={!isrealuser} className=" justify-content-center my-5">
        <Col>
          <Button
            disabled={!isrealuser}
            variant="primary"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Col>
      </Row>
      <Row>
        {!isrealuser && (
          <Col xs={12} className="text-center my-1 my-lg-5">
            <h2>Verify that you are a real user</h2>
            <Captcha onSuccessCallBack={onCaptchaSuccess} />
          </Col>
        )}
      </Row>
    </Container>
  );
}
