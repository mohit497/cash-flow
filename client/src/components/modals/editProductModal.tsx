import { useAppState } from "appstate/useAppstate";
import AddProduct from "components/product/addProduct";
import { Products, useFindProductByCodeQuery } from "generated/graphql";
import { Modal } from "react-bootstrap";

export const EditProductModal = () => {
  const { state, setState } = useAppState();

const  { data} = useFindProductByCodeQuery({variables:{
    _eq: state.editProduct
}})

  const onhide = () => {
    setState({ ...state, editProduct: undefined });
  };

  return (
    <Modal size="lg" onHide={onhide} show={Boolean(state.editProduct)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body key={data?.products.length}>
        <AddProduct product={data?.products[0] as Products} />
      </Modal.Body>
    </Modal>
  );
};
