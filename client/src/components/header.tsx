import { useAuth } from "hooks/useAuth";
import { Navbar, Container, Button } from "react-bootstrap";



export default function Header() {

    const { isLoggedIn, logout } = useAuth();

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    Cash Flow</Navbar.Brand>
                {isLoggedIn() && <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                }
                {isLoggedIn() && <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                     <Button variant="primary" onClick={logout}>
                         Logout 
                     </Button>
                    </Navbar.Text>
                </Navbar.Collapse>
                }
            </Container>
        </Navbar>)
}
