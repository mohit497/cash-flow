import { Divider } from "components/divider";
import Loading from "components/loader/loader";
import { PaginationBasic } from "components/paginationBasic";
import { useGetproductsQuery } from "generated/graphql";
import { useState } from "react";
import { Breadcrumb, Container, Table } from "react-bootstrap";
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

  const onPageChange = (page: number) => {
    refetch({ offset: (page - 1) * PAGE_SIZE });
  };

  return (
    <Container>
      {loading && <Loading />}
      <Breadcrumb>
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>
      <AddProduct />
      <Divider />
      <ActionsHeader onSearch={setsrchstring} />
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>code</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {data?.products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td className="bar-code">
                  <Barcode value={item.code} />
                </td>
                <td>{item.id}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationBasic onPageChange={onPageChange} active={1} total={50} />
    </Container>
  );
}
