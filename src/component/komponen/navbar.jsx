import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark shadow-5-strong" >
            <Container>
                <Navbar.Brand href="#home" className="d-flex">
                    <img
                        src="https://img.freepik.com/premium-vector/barbershop-logo-with-title-barber-shop_854396-1.jpg?w=740"
                        width="100"
                        height="50"
                        className="d-inline-block align-top image-brand"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="navbar-togle"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About Me</Nav.Link>
                        <Nav.Link href="#action1">Contact Us</Nav.Link>
                        <NavDropdown title="FAQ" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Navigation;