import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './navbar.css'

const navbar = () => {
    return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Secretaría de Movilidad</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#parametros">Parámetros</Nav.Link>
                                <Nav.Link href="#niveles">Niveles</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#sesion">Cerrar Sesión</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}

export default navbar
