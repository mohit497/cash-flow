import { useAppState } from "appstate/useAppstate";
import { useSoldMutation, GetsalesDocument } from "generated/graphql";
import { Row, Col, Button } from "react-bootstrap";
import './style.scss'

export default function CashierHeader() {
  const { setProducts, state } = useAppState();

  const [addtransaction] = useSoldMutation();

  const reset = () => {
    setProducts([]);
  };

  const getTransction = () => {
    return state.products.map((item) => {
      return {
        count: 1,
        p_code: item.code,
        price: item.amount
      };
    });
  };

  const sold = () => {
    addtransaction({
      variables: {
        org: state.org,
        shop: state.selectedShop?.id,
        data: getTransction(),
      },
      refetchQueries: [{ query: GetsalesDocument }],
    })
      .then((a) => {
        setProducts([]);
        console.log(a);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Row className="top-row justify-content-around align-items-center  ">
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
        <Button disabled={!Boolean(state.products?.length)} variant="success" onClick={sold}>
          Sell Order
        </Button>
      </Col>
    </Row>
  );
}
