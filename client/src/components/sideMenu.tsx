import {  Nav } from 'react-bootstrap'

export default function SideMenu() {
    return (
        <div className='side-menu'>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/shops">Shops</Nav.Link>
                <Nav.Link href="/store">
                    Store
                </Nav.Link>
                <Nav.Link href="/cashier">
                    Cashier
                </Nav.Link>
            </Nav>
        </div>
    )
}
