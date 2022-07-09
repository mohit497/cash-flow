import moment from "moment";

export enum Roles_ENUM{
    ORGADMIN = 'ORG-ADMIN',
    CASHIER = 'CASHIER'
}

export const PAGE_SIZE = 10;


export const getUserRole = (): Roles_ENUM => {
    return localStorage.getItem("role") as Roles_ENUM;
} 

export function getDate(no: number, view= "months") {
    return {
      start: moment(new Date()).subtract(no, view as any).format("YYYY-MM-DD"),
      end: moment(new Date()).format("YYYY-MM-DD"),
    };
  }
  