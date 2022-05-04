import { useReactiveVar } from "@apollo/client";
import { appState } from "./appstate";

export function useAppState() {
  const state = useReactiveVar(appState);

  const setProducts = (products: any[]) => {
    appState({ ...appState(), products: products });
  };

  return {
    state,
    setProducts
  };
}