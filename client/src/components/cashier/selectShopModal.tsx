import { useAppState } from "appstate/useAppstate";
import { Shops, useMyShopsQuery } from "generated/graphql";
import { Modal, Form } from "react-bootstrap";

interface Props {
  show: boolean;
}

export const SelectShopModal = (props: Props) => {
  const { data: shops } = useMyShopsQuery();
  const { setSelectedShop, state } = useAppState();

  const handleChange = (e) => {
    setSelectedShop(shops?.shops.find((i) => i.id === e.target.value) as Shops);
  };
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Select Shop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select
          onChange={handleChange}
          value={state.selectedShop?.id}
          size="lg"
        >
          {shops?.shops.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </Form.Select>
      </Modal.Body>
    </Modal>
  );
};
