import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import BarcodeReader from "react-barcode-reader";
import "./style.scss";
import {
  useAddproductMutation,
  GetproductsDocument,
  useFindProductByCodeQuery,
} from "generated/graphql";
import useNotifications from "hooks/useNotifications";

interface ProductForm {
  name: string | undefined;
  price: number | undefined;
  total: number | undefined;
  code: number | undefined;
}

export default function AddProduct() {
  const { showNotifications } = useNotifications();

  const [form, setform] = useState<ProductForm>({
    name: "",
    price: undefined,
    total: undefined,
    code: undefined,
  });

  const [addproductMutation] = useAddproductMutation();

  const handleScan = (data) => {
    setform({ ...form, code: data });
  };
  const handleError = (err) => {
    console.error(err);
  };

  const { data: existingProduct } = useFindProductByCodeQuery({
    variables: {
      _eq: form.code?.toString() || "",
    },
    skip: !form.code,
  });

  const handleAddProduct = () => {
    addproductMutation({
      variables: {
        objects: {
          name: form.name,
          amount: form.price,
          code: form.code?.toString(),
          org: "26e434c0-4114-44c8-adb7-adeaea4e7d70",
        },
      },
      refetchQueries: [{ query: GetproductsDocument }],
    })
      .then(() => {
        showNotifications("product added ", "success");
      })
      .catch((e: Error) => {
        console.error(e);
        showNotifications(
          `Adding Product Failed  with error ${e.message}`,
          "danger"
        );
      });
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container className="my-2 ">
      <BarcodeReader onError={handleError} onScan={handleScan} />
      <Row className="justify-content-around align-items-center">
        <Col>
          <Form.Control
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Name"
          />
        </Col>
        <Col>
          <Form.Control
            name="price"
            onChange={handleChange}
            value={form.price}
            type="text"
            placeholder="Price"
          />
        </Col>
        <Col xs={3} className="bar-code">
          <Form.Control
            name="code"
            onChange={handleChange}
            value={form.code}
            type="text"
            placeholder="bar code"
          />
        </Col>
        <Col>
          <Form.Control
            onChange={handleChange}
            name="total"
            value={form.total}
            type="text"
            placeholder="total units"
          />
        </Col>
        <Col>
          <Button
            disabled={Boolean(existingProduct?.products.length)}
            variant="primary"
            onClick={handleAddProduct}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        {Boolean(existingProduct?.products.length) && (
          <Alert variant="danger" className="m-2">
            This Product is Already in inventory with name{" "}
            <strong> {existingProduct?.products[0].name} </strong>
          </Alert>
        )}
      </Row>
    </Container>
  );
}
