import { GetinventoryDocument, Products, useAddinventoryMutation } from "generated/graphql";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export default function AddItem(product: Products) {

    const [count, setcount] = useState()
    const handleChange = (e) => {
        setcount(e.target.value);
    }

    const [addToInventory] = useAddinventoryMutation({
        variables: {
            object: {
                count,
                p_code: product.code,
            }
        },
        refetchQueries:[{query: GetinventoryDocument, variables:{ limit: 10, offset: 0}}]
    })

    const handleAddItem = ()=>{
        addToInventory().then(()=>{
            setcount(undefined)
        })
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    size="sm"
                    placeholder="no of items"
                    aria-label="no of items"
                    aria-describedby="basic-addon2"
                    onChange={ handleChange}
                    value={count}
                />
                <InputGroup.Text id="basic-addon2"> <Button size="sm" variant="primary" onClick={handleAddItem}>
                    Add
                </Button> </InputGroup.Text>
            </InputGroup>
        </div>
    )
}
