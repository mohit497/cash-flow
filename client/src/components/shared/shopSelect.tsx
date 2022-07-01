import { useAppState } from "appstate/useAppstate";
import { useMyShopsQuery, Shops } from "generated/graphql";
import { Form } from "react-bootstrap";

export const ShopSelect = ({ size}) => {
  const { data: shops } = useMyShopsQuery();
  const { setSelectedShop, state } = useAppState();

  const handleChange = (e) => {
    setSelectedShop(shops?.shops.find((i) => i.id === e.target.value) as Shops);
  };

  return (
    <>
      <Form.Select
        onChange={handleChange}
        value={state.selectedShop?.id}
        size={size || 'lg'}
      >
        {shops?.shops.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        }).concat([<option value={''}>Select Shop</option>]).reverse()}
      </Form.Select>
    </>
  );
};
