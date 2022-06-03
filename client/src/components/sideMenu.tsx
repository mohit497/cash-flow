import {  Nav } from 'react-bootstrap'
import { FaDollarSign, FaStore, FaTshirt, FaWarehouse } from 'react-icons/fa'

export default function SideMenu() {
    return (
        <div className='side-menu px-4'>
            <Nav defaultActiveKey="/home" className="flex-column align-items-start text-center">
                <Nav.Link href="/products"><FaTshirt /> Products</Nav.Link>
                <Nav.Link href="/shops"> <FaStore /> Shops</Nav.Link>
                <Nav.Link href="/store">
                    <FaWarehouse /> Store
                </Nav.Link>
                <Nav.Link href="/cashier">
                  <FaDollarSign /> Cashier
                </Nav.Link>
            </Nav>
        </div>
    )
}
