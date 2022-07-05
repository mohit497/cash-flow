import { useAppState } from "appstate/useAppstate";
import { useMyShopsQuery, Shops } from "generated/graphql";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  size: "sm" | "lg";
  onShopSelect: (id: string[]) => void;
  global?: boolean;
}

export const ShopSelect = (props: Props) => {
  const { data: shops } = useMyShopsQuery();
  const { setSelectedShop, state } = useAppState();
  const [selectedShop, setselectedShop] = useState("");

  useEffect(() => {
    props.onShopSelect(shops?.shops.map((shop) => shop.id) || []);
  }, [shops]);

  const handleChange = (e) => {
    if (props.global) {
      setSelectedShop(
        shops?.shops.find((i) => i.id === e.target.value) as Shops
      );
    }
    setselectedShop(e.target.value);

    if (e.target.value === "All") {
      !props.global &&
        props.onShopSelect(shops?.shops.map((shop) => shop.id) || []);
    } else {
      props?.onShopSelect && props?.onShopSelect(new Array(e.target.value));
    }
  };

  return (
    <>
      <Form.Select
        onChange={handleChange}
        value={props?.global ? state.selectedShop?.id : selectedShop}
        size={props.size}
      >
        {shops?.shops
          .map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })
          .concat([
            <option value={"All"}>
              {" "}
              {props.global ? `Select Shop` : "All"}
            </option>,
          ])
          .reverse()}
      </Form.Select>
    </>
  );
};
