import { makeVar } from "@apollo/client";
import { Shops } from "generated/graphql";
import jwt_decode from "jwt-decode";

let temp: any;
try {
  temp = window.localStorage.getItem("token");
  temp = jwt_decode(temp);
} catch {}

export interface AppState {
  products: any[];
  token: { role: string};
  role: string;
  selectedShop: Shops | undefined;
  org: string;
  selectedProduct: string | undefined;
}

const initialState: AppState = {
  products: [],
  token: temp,
  role: temp?.role,
  selectedShop: undefined,
  org: temp?.org,
  selectedProduct: undefined
};

export const appState = makeVar<AppState>(initialState);