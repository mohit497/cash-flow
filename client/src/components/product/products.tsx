import { useGetproductsQuery } from "generated/graphql";
import { Container, Table } from "react-bootstrap";
import ActionsHeader from "./actionsHeader";
import AddProduct from "./addProduct";

export default function Products() {

    const { data } = useGetproductsQuery()

    return (
        <Container>
            <h1 className='p-3 pull-left'> Products</h1>
            <AddProduct />
            <ActionsHeader />
            <Table striped bordered hover>
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
                    {
                        data?.products.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.code}</td>
                                <td>{item.id}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}
