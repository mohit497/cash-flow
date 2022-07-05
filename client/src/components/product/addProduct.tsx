import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import BarcodeReader from "react-barcode-reader";
import "./style.scss";
import {
  useAddproductMutation,
  GetproductsDocument,
  useFindProductByCodeQuery,
  Products,
  useUpdateProductMutation,
} from "generated/graphql";
import useNotifications from "hooks/useNotifications";

interface ProductForm {
  name: string | undefined;
  price: number | undefined;
  total: number | undefined;
  code: number | undefined;
  cost_price: number | undefined;
}

interface Props {
  product?: Products | undefined;
}

export default function AddProduct(props: Props) {
  const { showNotifications } = useNotifications();
  const { product } = props;

  const [form, setform] = useState<ProductForm>({
    name: product?.name,
    price: product?.amount,
    total: undefined,
    code: Number(product?.code) || undefined,
    cost_price: product?.cost_price || undefined
  });

  const [addproductMutation] = useAddproductMutation();
  const [updateProduct] = useUpdateProductMutation();

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
    skip: !form.code || product?.id,
  });

  const handleAddProduct = () => {
    addproductMutation({
      variables: {
        name: form.name,
        code: form.code?.toString() || "",
        amount: form.price,
        cost_price: Number(form.cost_price)
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

  const handleUpdateProduct = () => {
    updateProduct({
      variables: {
        _set: {
          name: form.name,
          amount: form.price,
          cost_price: form.cost_price
        },
        id: product?.id,
      },

      refetchQueries: [{ query: GetproductsDocument }],
    })
      .then(() => {
        showNotifications("product updated ", "success");
      })
      .catch((e: Error) => {
        console.error(e);
        showNotifications(
          `Adding Product Failed  with error ${e.message}`,
          "danger"
        );
      });
  };

  const handleProductChange = () => {
    if (product) {
      handleUpdateProduct();
    } else {
      handleAddProduct();
    }
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
            name="cost_price"
            onChange={handleChange}
            value={form.cost_price}
            type="text"
            placeholder="cost price"
          />
        </Col>
        <Col>
          <Form.Control
            name="price"
            onChange={handleChange}
            type="text"
            placeholder="Price"
            value={form.price }
          />
        </Col>
        <Col xs={3} className="bar-code">
          <Form.Control
            name="code"
            onChange={handleChange}
            value={form.code}
            type="text"
            placeholder="bar code"
            disabled={Boolean(product?.code)}
          />
        </Col>
        <Col hidden={Boolean(product?.id)}>
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
            onClick={handleProductChange}
          >
            {product ? "update " : "add"}
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
