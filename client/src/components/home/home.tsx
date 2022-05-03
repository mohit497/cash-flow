import Products from 'components/product/products';
import { useGetusersQuery } from '../../generated/graphql'

export default function Home() {

    const { data } = useGetusersQuery();

    console.log(data)

    return (
        <div>
            <Products />
        </div>
    )
}
