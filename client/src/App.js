import './App.css';
import Home from './components/home/home';
import Header from 'components/header';
import Shops from 'components/shop/shop'
import { Container, Row, Col } from 'react-bootstrap';
import SideMenu from 'components/sideMenu';
import { getUserRole } from './utils'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Products from 'components/product/products';
import Cashier from 'components/cashier/cashier';
import Store from 'components/store/store';
import Login from 'components/login';

function App() {

  const role = getUserRole()

  return (
    <div className="App">
      <Router>
        <Header />
        <Container fluid>
          <Row className='w-100'>
            {!role &&
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
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
