import { useAppState } from "appstate/useAppstate";
import { ShopSelect } from "components/shared/shopSelect";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
}

export const SelectShopModal = (props: Props) => {

  const { state } = useAppState();


  return (
    <Modal show={!state.selectedShop?.id}>
      <Modal.Header>
        <Modal.Title>Select Shop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ShopSelect size="lg" />
      </Modal.Body>
    </Modal>
  );
};
