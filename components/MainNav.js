import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark fixed-top ">
        <Container className="container-md">
          <Navbar.Brand as={Link} href="/" style={{ fontSize : '1.5rem' }}>Kaung Khant San</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/about" style={{ fontSize : '1.5rem' }}>About</Nav.Link>
              <Nav.Link as={Link} href='/favourites' style={{ fontSize : '1.5rem' }}>Favourites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}