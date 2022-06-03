import { useReactiveVar } from "@apollo/client";
import { Shops } from "generated/graphql";
import { AppState, appState } from "./appstate";

export function useAppState() {
  const state = useReactiveVar(appState);

  const setProducts = (products: any[]) => {
    appState({ ...appState(), products: products });
  };
  const setSelectedShop = (shop: Shops | undefined) => {
    appState({ ...appState(), selectedShop: shop });
  };
  const setState = (state: AppState) => {
    appState(state);
  };

  return {
    state,
    setProducts,
    setSelectedShop,
    setState
  };
}
