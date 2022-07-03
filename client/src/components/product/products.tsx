import { useAppState } from "appstate/useAppstate";
import { Divider } from "components/divider";
import Loading from "components/loader/loader";
import { PaginationBasic } from "components/paginationBasic";
import { useGetproductsQuery } from "generated/graphql";
import { useState } from "react";
import { Breadcrumb, Container, Table, Badge, Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { PAGE_SIZE } from "utils";
import ActionsHeader from "./actionsHeader";
import AddProduct from "./addProduct";
import "./style.scss";

var Barcode = require("react-barcode");

export default function Products() {
  const [srchstring, setsrchstring] = useState("");
  const { data, loading, refetch } = useGetproductsQuery({
    variables: {
      limit: PAGE_SIZE,
      offset: 0,
      _iregex: srchstring,
    },
  });

  const { setState, state } = useAppState();

  const editProduct = (id) => {
    setState({ ...state, editProduct: id });
  };

  const onPageChange = (page: number) => {
    refetch({ offset: (page - 1) * PAGE_SIZE });
  };

  return (
    <Container>
      {loading && <Loading />}
      <Breadcrumb>
        <Breadcrumb.Item active>
          Products <Badge bg="primary">{data?.products.length}</Badge>
        </Breadcrumb.Item>
      </Breadcrumb>
      <AddProduct />
      <Divider />
      <ActionsHeader onSearch={setsrchstring} />
      <Table responsive size="sm" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>cost price</th>
            <th>price</th>
            <th>code</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.cost_price}</td>
                <td>{item.amount}</td>
                <td className="bar-code">
                  <Barcode value={item.code} />
                </td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => editProduct(item.code)}
                  >
                    <FaPencilAlt /> Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationBasic onPageChange={onPageChange} active={1} total={50} />
    </Container>
  );
}
