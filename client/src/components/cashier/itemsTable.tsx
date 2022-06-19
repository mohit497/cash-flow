import NoRecords from "components/norRecords";
import { Products } from "generated/graphql";
import { Button, Table } from "react-bootstrap";

interface Props {
  products: Products[];
  onRemove: (string) => void;
}

export default function ItemsTable(props: Props) {
  if (props.products.length ===0 ) {
    return <NoRecords message="no products in order" />;
  }
  return (
    <Table responsive size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Code</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.products?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.amount}</td>
              <td>
                <Button
                  size={"sm"}
                  variant="danger"
                  onClick={() => props.onRemove(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
