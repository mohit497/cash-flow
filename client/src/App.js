import './App.css';
import Home from './components/home/home';
import Header from 'components/header';
import Shops from 'components/shop/shop'
import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from 'components/sideMenu';
import { getUserRole, Roles_ENUM } from './utils'
import { ReactNotifications } from 'react-notifications-component'


import {
  Route,
  Routes
} from "react-router-dom";
import Products from 'components/product/products';
import Cashier from 'components/cashier/cashier';
import Store from 'components/store/store';
import Login from 'components/login';
import { useAuth } from 'hooks/useAuth';

function App() {

  const { isLoggedIn } = useAuth()
  const role = getUserRole()


  return (
    <div className="App">
      <ReactNotifications />
      <Header />
      <Container fluid>
        <Row className='w-100'>
          {role === Roles_ENUM.ORGADMIN && isLoggedIn() &&
            <Col xs={2} md={3}>
              <SideMenu />
            </Col>
          }
          <Col>
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/products" element={<Products />}>
              </Route>
              <Route exact path="/shops" element={<Shops />}>
              </Route>
              <Route exact path="/cashier" element={<Cashier />}></Route>
              <Route exact path="/store" element={<Store />}>
              </Route>
              <Route exact path="/login" element={<Login />}>
              </Route>
              <Route exact path="/cashier" element={<Cashier />}>
              </Route>
            </Routes>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
