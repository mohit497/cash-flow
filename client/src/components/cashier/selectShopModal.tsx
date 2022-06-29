import { useAppState } from "appstate/useAppstate";
import { ShopSelect } from "components/shared/shopSelect";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
}

export const SelectShopModal = (props: Props) => {

  const { setSelectedShop, state } = useAppState();

  const onHide = () => {
    setSelectedShop(undefined);
  };
  return (
    <Modal onHide={onHide} show={!state.selectedShop?.id}>
      <Modal.Header>
        <Modal.Title>Select Shop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ShopSelect />
      </Modal.Body>
    </Modal>
  );
};
