import { useAppState } from "appstate/useAppstate";
import { useGetUserInfoQuery } from "generated/graphql";
import { useAuth } from "hooks/useAuth";
import { Navbar, Container, Button } from "react-bootstrap";
import { OrgSelect } from "./shared/orgSelect";
import { FaStore, FaUserAlt } from 'react-icons/fa';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  const { data } = useGetUserInfoQuery();
  const { state } = useAppState();

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Cash Flow</Navbar.Brand>
        {isLoggedIn() && (
          <>
            <Navbar.Collapse
              className="justify-content-end "
              style={{ gap: " 20px" }}
            >
              <Navbar.Text>
                Signed in as: <a href="#login">{data?.users[0].name}</a>{" "}
              </Navbar.Text>
              <Navbar.Text>
                <span><FaUserAlt /> { state.role}</span>
              </Navbar.Text>
              <Navbar.Text >
                <span><FaStore /> {state.selectedShop?.name}</span>
              </Navbar.Text>

              <OrgSelect />
            </Navbar.Collapse>
          </>
        )}
        {isLoggedIn() && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="primary" onClick={logout}>
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}
