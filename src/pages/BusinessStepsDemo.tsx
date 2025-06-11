import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import BusinessStepsAccordion from '../components/BusinessStepsAccordion';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function BusinessStepsDemo() {
  return (
    <>
      <SimpleNavbar />
      
      {/* Hero Section - Matching Landing Page Style */}
      <Container 
        fluid 
        className="d-flex align-items-center justify-content-center text-center text-white py-5" 
        style={{ 
          minHeight: '70vh', 
          backgroundColor: 'var(--bs-primary)'
        }}
      >
        <div className="px-3 px-md-4">
          <h1 className="hero-title mb-3 mb-md-4">
            Cómo Funciona Mealkitz
          </h1>
          <p className="hero-subtitle mb-4 mb-md-5">
            Tres pasos simples para transformar tu idea en un negocio próspero
          </p>
          <div className="d-flex justify-content-center">
            <Button 
              variant="secondary" 
              className="hero-btn px-4 py-3"
              onClick={() => document.getElementById('business-steps')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Pasos
            </Button>
          </div>
        </div>
      </Container>

      {/* Business Steps Accordion */}
      <section id="business-steps" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col xs={12} lg={8}>
              <h2 className="mb-4" style={{ color: 'var(--bs-primary)' }}>
                Tu Camino al Éxito
              </h2>
              <p className="lead text-muted">
                Descubre cómo Mealkitz te acompaña en cada paso para construir y hacer crecer tu negocio gastronómico
              </p>
            </Col>
          </Row>
          
          <BusinessStepsAccordion />
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5" style={{ backgroundColor: 'white' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} lg={6}>
              <h3 className="mb-4" style={{ color: 'var(--bs-primary)' }}>
                ¿Listo para Empezar?
              </h3>
              <p className="mb-4 text-muted">
                Únete a la lista de espera y sé de los primeros en acceder a la plataforma completa de Mealkitz
              </p>
              <a 
                href="https://wa.me/50761008249?text=Hola%2C%20quiero%20unirme%20a%20la%20lista%20de%20espera%20de%20Mealkitz" 
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unirme a la Lista de Espera
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
} 