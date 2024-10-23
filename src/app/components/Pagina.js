"use client";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Pagina({ props }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Acessar Lista" id="basic-nav-dropdown">
              <NavDropdown.Item href="/imoveis">
                Imóveis
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <div className="bg-secondary text-center text-white py-2">
        <h1>{props.titulo}</h1>
      </div>

      <Container className="mt-2">{props.children}</Container>
    </>
  );
}