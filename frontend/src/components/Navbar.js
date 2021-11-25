import { Navbar, Container, Nav } from 'react-bootstrap'
import './navbar.css'

export default function navbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Secretaría de Movilidad</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Parametros">Parámetros</Nav.Link>
                            <Nav.Link href="/Niveles">Niveles</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/Login">Cerrar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

