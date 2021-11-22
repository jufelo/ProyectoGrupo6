import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#parametros">Parámetros</Nav.Link>
                    <Nav.Link href="#niveles">Niveles</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#sesion">Cerrar sesión</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar
