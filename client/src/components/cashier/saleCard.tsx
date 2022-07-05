import { Sales } from "generated/graphql";
import { Badge, ListGroup } from "react-bootstrap";
import Moment from "react-moment";

export default function SaleCard(props: Sales) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {" "}
          <Moment format="LLL">{props.createdAt}</Moment>
        </div>
        {props?.active_role?.userByUser.name}
      </div>
      <Badge bg="primary" pill>
        {props.transactions_aggregate.aggregate?.count}
      </Badge>
    </ListGroup.Item>
  );
}
