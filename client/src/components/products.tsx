import { useGetproductsQuery } from "generated/graphql";
import { Container, Table } from "react-bootstrap";

export default function Products() {

    const { data } = useGetproductsQuery()

    return (
        <Container>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.products.map((item, index) => {
                            return <tr>
                                <td>{index +1}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.code}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}
