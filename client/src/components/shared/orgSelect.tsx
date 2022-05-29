import { useGetRolesQuery } from "generated/graphql";
import { useState } from "react";
import { Badge, NavDropdown } from "react-bootstrap";

enum RoleColor {
  "ORG-ADMIN" = "success",
  "CASHIER" = "primary",
  "SUPPORT" = "warning",
}

export const OrgSelect = () => {
  const { data, loading } = useGetRolesQuery();
  const [selectedRole, setselectedRole] = useState(data?.active_roles[0].id);

  const handleChange = async (event) => {
    sessionStorage.setItem("role_id", event.target.value);
    setselectedRole(event.target.value);
  };


  if (loading) return <></>;

  return (
    <NavDropdown
      defaultValue={selectedRole}
      onChange={handleChange}
      title="Change Role"
      id="roleSelect"
    >
      {data?.active_roles.map((item) => {
        return (
          <NavDropdown.Item key={item.id} value={item.id}>
            {item.orgByOrg?.name}
            <Badge className="mx-2 small" bg={RoleColor[item.role]}>
              {item.role}
            </Badge>
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};
