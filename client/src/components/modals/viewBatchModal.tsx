import { useAppState } from "appstate/useAppstate";
import { useInventoryByProductQuery } from "generated/graphql";
import { Modal, Table } from "react-bootstrap";
import Moment from "react-moment";
import { PAGE_SIZE } from "utils";
import { PaginationBasic } from "../paginationBasic";

export const ViewBatchShopModal = () => {
  const { state, setState } = useAppState();

  const { data, refetch } = useInventoryByProductQuery({
    variables: {
      _eq: state.selectedProduct,
      limit: PAGE_SIZE,
    },
  });

  const onPageChange = (no) => {
    refetch({
      offset: no - 1 * PAGE_SIZE,
    });
  };

  const onhide = () => {
    setState({ ...state, selectedProduct: undefined });
  };

  return (
    <Modal size="lg" onHide={onhide} show={Boolean(state.selectedProduct)}>
      <Modal.Header closeButton>
        <Modal.Title>Product Batches</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive hover className="p-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>count</th>
              <th>code</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {data?.inventory.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.product.name}</td>
                  <td>{item.count}</td>
                  <td> <Moment format="LLL" >{item.createdAt}</Moment></td>
                  <td>{item.product.added_by}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <PaginationBasic
          onPageChange={onPageChange}
          active={1}
          total={Number(data?.total.aggregate?.count)}
        />
      </Modal.Body>
    </Modal>
  );
};
