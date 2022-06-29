import "./App.css";
import Header from "components/header";
import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "components/sideMenu";
import { getUserRole, Roles_ENUM } from "./utils";
import { ReactNotifications } from "react-notifications-component";


import { useAuth } from "hooks/useAuth";
import { ViewBatchShopModal } from "components/modals/viewBatchModal";
import { EditProductModal } from "components/modals/editProductModal";
import { AppRoutes } from "appRoutes";

function App() {
  const { isLoggedIn } = useAuth();
  const role = getUserRole();

  return (
    <div className="App vh-50">
      <ReactNotifications />
      <ViewBatchShopModal />
      <EditProductModal />
      <Header />
      <Container fluid>
        <Row>
          {role === Roles_ENUM.ORGADMIN && isLoggedIn() && (
            <Col xs={1} lg={1} md={3}>
              <SideMenu />
            </Col>
          )}
          <Col xs={11} lg={11} md={9}>
            <AppRoutes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
