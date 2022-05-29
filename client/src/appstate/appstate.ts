import { makeVar } from "@apollo/client";
import jwt_decode from "jwt-decode";

let temp: any;
try {
  temp = window.localStorage.getItem("token");
  temp = jwt_decode(temp);
} catch {}

export interface AppState {
  products: any[];
  token: { role: string}
}

const initialState: AppState = {
  products: [],
  token: temp
};

export const appState = makeVar<AppState>(initialState);