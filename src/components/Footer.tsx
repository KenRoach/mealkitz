import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/mk_white.png';

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="text-light mb-3">Mealkitz</h5>
            <p className="text-light opacity-75">
            Te damos todo lo necesario para lanzar, operar y escalar tu negocio. Sin barreras, sin excusas. ¡Emprende hoy con Mealkitz!
            </p>
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="text-light mb-3">Contacto</h5>
            <div className="text-light opacity-75">
              <p className="mb-2">
                <strong>Email:</strong> hello@mealkitz.io
              </p>
              <p className="mb-0">
                <strong>WhatsApp:</strong> +507 6100-8249
              </p>
            </div>
          </Col>
        </Row>
        <hr className="bg-light opacity-25" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="small text-light opacity-50 mb-0">
            <span className="footer-text-reduced">&copy; {new Date().getFullYear()} Powered by</span>
            <img 
              src={logo} 
              alt="Mealkitz.io" 
              style={{ height: '100px', marginLeft: '5px' }} 
            />
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
