import Products from 'components/products';
import { Container } from 'react-bootstrap';
import { useGetusersQuery } from '../../generated/graphql'

export default function Home() {

    const { data } = useGetusersQuery();

    console.log(data)

    return (
        <Container>
            <h1 className='p-3'> Products</h1>
            <Products />
        </Container>
    )
}
