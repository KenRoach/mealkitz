import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/mk_white.png';

const SimpleNavbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar expand="lg" sticky="top" className="main-navbar" variant="dark">
      <Container className="d-flex align-items-center position-relative">
        <Navbar.Brand 
          onClick={() => handleNavigate('/')} 
          style={{ cursor: 'pointer' }}
          className="d-flex align-items-center p-0"
        >
          <img 
            src={logo} 
            alt="Mealkitz.io Logo" 
            className="navbar-logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {currentUser ? (
              <>
                <Nav.Link 
                  onClick={() => handleNavigate('/dashboard')}
                  className="me-2 mb-2 mb-lg-0"
                >
                  Panel
                </Nav.Link>
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                  size="sm"
                  className="mb-2 mb-lg-0"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline-light"
                  onClick={() => handleNavigate('/login')}
                  size="sm"
                  className="me-2 mb-2 mb-lg-0"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => handleNavigate('/register')}
                  size="sm"
                  className="mb-2 mb-lg-0"
                >
                  Registrarse
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SimpleNavbar;