import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Multi-colored logo: Red, Green, and Orange */}
          <Navbar.Brand href="/" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            <span style={{ color: '#FF4D4D' }}>Metropolis</span>{' '}
            <span style={{ color: '#2ECC71' }}>Super</span>
            <span style={{ color: '#F39C12' }}>market</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart className="me-1" /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser className="me-1" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;