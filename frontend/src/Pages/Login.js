import { Container, FloatingLabel, Button, Form, Image } from 'react-bootstrap'
import Logo from './logo2.svg'
import './login.css'

export default function login() {
    return (
        <div className="Login">
            <Container className="d-grid h-100 text-center">
                <div className="mb-3 text-center">
                    <Image src={Logo} alt="Logo" width="80" height="auto" />
                </div>
                <h1 className="fs-3 fw-normal">Inicio Sesión</h1>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Usuario"
                    className="mb-2"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button variant="primary" size="lg" type="submit">Iniciar Sesión
                </Button>
                <p className="mt-3 text-muted">Mintic-UPB Group-6 NRC-53844 2021</p>
            </Container>
        </div>
    )
}

