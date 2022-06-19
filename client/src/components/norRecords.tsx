import { Row } from "react-bootstrap";

interface Props {
  message?: string;
}
export default function NoRecords(props: Props) {
  return (
    <div className="banner-no-records text-bold m-2 p-5 w-100 mh-50">
      <Row className="text-center">
        <div className="text-dark   lead text-muted h-50 ">
          {" "}
          {props.message ?? "No Records To Display"}
        </div>
      </Row>
    </div>
  );
}
