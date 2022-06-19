import { useAppState } from "appstate/useAppstate";
import { useGetUserInfoQuery } from "generated/graphql";
import { useAuth } from "hooks/useAuth";
import { Navbar, Container, Button } from "react-bootstrap";
import { OrgSelect } from "./shared/orgSelect";
import { FaStore, FaUserAlt } from "react-icons/fa";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  const { data } = useGetUserInfoQuery();
  const { state , setSelectedShop} = useAppState();

  const changeShop = ()=>{
    setSelectedShop(undefined)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cash Flow</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        {isLoggedIn() && (
          <Navbar.Collapse
            className="justify-content-end "
            style={{ gap: " 20px" }}
          >
            <Navbar.Text>
              Signed in as: <a href="#login">{data?.users[0].name}</a>{" "}
            </Navbar.Text>
            <Navbar.Text>
              <span>
                <FaUserAlt /> {state.role}
              </span>
            </Navbar.Text>
            <Navbar.Text onClick={changeShop}>
              <span>
                <FaStore /> {state.selectedShop?.name}
              </span>
            </Navbar.Text>

            <OrgSelect />
          </Navbar.Collapse>
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
