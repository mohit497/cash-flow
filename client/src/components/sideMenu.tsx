import { Nav } from "react-bootstrap";
import {
  FaDollarSign,
  FaHome,
  FaStore,
  FaTshirt,
  FaWarehouse,
} from "react-icons/fa";
import './style.scss'

export default function SideMenu() {
  return (
    <div className="side-menu mx-lg-2 mx-0">
      <Nav
        defaultActiveKey="/home"
        className="flex-column align-items-start text-center"
      >
        <Nav.Link href="/">
          <FaHome /> <span className="d-none d-md-block">Home</span>
        </Nav.Link>
        <Nav.Link href="/products">
          <FaTshirt /> <span className="d-none d-md-block"> Products</span>
        </Nav.Link>
        <Nav.Link href="/shops">
          <FaStore /> <span className="d-none d-md-block">Shops</span>
        </Nav.Link>
        <Nav.Link href="/store">
          <FaWarehouse /> <span className="d-none d-md-block">Store</span>
        </Nav.Link>
        <Nav.Link href="/cashier">
          <FaDollarSign /> <span className="d-none d-md-block">Cashier</span>
        </Nav.Link>
      </Nav>
    </div>
  );
}
