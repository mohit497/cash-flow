import { Sales } from "generated/graphql";
import { Card } from "react-bootstrap";
import Moment from "react-moment";

export default function SaleCard(props: Sales) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body className="p-1">
                <Card.Title><Moment format="LLL" >{props.createdAt}</Moment></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.transactions_aggregate.aggregate?.count} items - by {props?.userByUser?.name}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
