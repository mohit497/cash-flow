export enum Roles_ENUM{
    ORGADMIN = 'ORG-ADMIN',
    CASHIER = 'CASHIER'
}

export const PAGE_SIZE = 10;


export const getUserRole = (): Roles_ENUM => {
    return localStorage.getItem("role") as Roles_ENUM;
} 