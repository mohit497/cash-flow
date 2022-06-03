import { useReactiveVar } from "@apollo/client";
import { Shops } from "generated/graphql";
import { appState } from "./appstate";

export function useAppState() {
  const state = useReactiveVar(appState);

  const setProducts = (products: any[]) => {
    appState({ ...appState(), products: products });
  };
  const setSelectedShop = (shop: Shops | undefined) => {
    appState({ ...appState(), selectedShop: shop });
  };

  return {
    state,
    setProducts,
    setSelectedShop
  };
}
