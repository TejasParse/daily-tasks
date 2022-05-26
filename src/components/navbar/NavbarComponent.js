import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavbarComponent.css"

const NavbarComponent = (props) => {

    return (
        <div id="navbar">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Daily Tasks
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Show Tasks</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )

};

export default NavbarComponent;