import { useGetRolesQuery } from "generated/graphql";
import { useAuth } from "hooks/useAuth";
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
  const { switchRole } = useAuth();

  const handleChange = async (_,val) => {
    setselectedRole(_);
    await switchRole(_);
  };

  if (loading) return <></>;

  return (
    <NavDropdown
      defaultValue={selectedRole}
      onSelect={handleChange}
      title="Change Role"
      id="roleSelect"
    >
      {data?.active_roles.map((item) => {
        return (
          <NavDropdown.Item key={item.id} eventKey={item.id}>
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
