import { Roles_Enum } from "generated/graphql";

export const getUserRole = (): Roles_Enum => {
    return sessionStorage.getItem("role") as Roles_Enum;
} 