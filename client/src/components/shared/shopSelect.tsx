import { useAppState } from "appstate/useAppstate";
import { useMyShopsQuery, Shops } from "generated/graphql";
import { useEffect } from "react";
import { Form } from "react-bootstrap";

export const ShopSelect = () => {
  const { data: shops } = useMyShopsQuery();
  const { setSelectedShop, state } = useAppState();

  const handleChange = (e) => {
    setSelectedShop(shops?.shops.find((i) => i.id === e.target.value) as Shops);
  };

  useEffect(() => {
    return () => {
      setSelectedShop(undefined);
      setSelectedShop(shops?.shops[0] as Shops);
    };
  }, []);

  return (
    <>
      <Form.Select
        onChange={handleChange}
        value={state.selectedShop?.id}
        size="lg"
      >
        {shops?.shops.map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
      </Form.Select>
    </>
  );
};
