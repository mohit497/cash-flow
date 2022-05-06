import Loading from "components/loader/loader";
import { Products, useGetinventoryQuery } from "generated/graphql";
import { useState } from "react";
import { Container, FormControl, Row, Table } from "react-bootstrap";
import AddItem from "./addItem";

export default function Store() {
    const [name, setname] = useState()
    const handleChange = (e) => {
        setname(e.target.value);
    }

    const { data, loading } = useGetinventoryQuery({
        variables:{
            limit: 10,
            offset:0,
            _iregex: name
        }
    })

    return (
        <Container>
            { loading &&  <Loading />}
            <h1 className='p-3 pull-left'> Products</h1>
            <Row className="my-2">
            <FormControl
                    placeholder="search by product name"
                    aria-label="no of items"
                    aria-describedby="basic-addon2"
                    onChange={ handleChange}
                    value={name}
                />
                </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>code</th>
                        <th>count</th>
                        <th>Add</th>
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
                                <td>{item.inventories_aggregate.aggregate?.sum?.count}</td>
                                <td><AddItem {...item as Products}/> </td>

                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}
