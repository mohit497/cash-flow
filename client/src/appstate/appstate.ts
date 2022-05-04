import { makeVar } from "@apollo/client";

export interface AppState {
  products: any[];
}

const initialState: AppState = {
  products: []
};

export const appState = makeVar<AppState>(initialState);