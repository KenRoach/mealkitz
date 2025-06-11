import { useState } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import { ChevronDown, ChevronUp, Building2, Users, Smartphone } from 'lucide-react';

interface BusinessStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const businessSteps: BusinessStep[] = [
  {
    id: 'open-business',
    title: 'ABRE TU NEGOCIO',
    description: 'Te ayudamos a arrancar sin papeleo: tu negocio opera legalmente bajo Mealkitz S.A.',
    icon: <Building2 size={32} />,
    color: '#00356B'
  },
  {
    id: 'access-suppliers',
    title: 'ACCEDE A PROVEEDORES',
    description: 'Red de proveedores confiables para tu negocio con productos calidad y precios competitivos.',
    icon: <Users size={32} />,
    color: '#FE4236'
  },
  {
    id: 'manage-business',
    title: 'GESTIONA TU NEGOCIO',
    description: 'Ponemos una app para cobrar en celular, tener tienda online y ver ventas.',
    icon: <Smartphone size={32} />,
    color: '#00356B'
  }
];

export default function BusinessStepsAccordion() {
  const [openStep, setOpenStep] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setOpenStep(openStep === stepId ? null : stepId);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xl={8}>
          <div className="business-steps-accordion">
            {businessSteps.map((step, index) => (
              <Card 
                key={step.id}
                className={`business-step-card mb-3 ${openStep === step.id ? 'active' : ''}`}
                style={{ 
                  borderLeft: `5px solid ${step.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out'
                }}
                onClick={() => toggleStep(step.id)}
              >
                <Card.Header 
                  className="business-step-header d-flex align-items-center justify-content-between p-4"
                  style={{ 
                    backgroundColor: openStep === step.id ? '#f8f9fa' : 'white',
                    border: 'none'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="step-icon me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: step.color,
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 
                        className="step-title mb-0"
                        style={{
                          fontFamily: 'var(--font-headline)',
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: step.color,
                          textTransform: 'uppercase',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {step.title}
                      </h3>
                      <div 
                        className="step-number mt-1"
                        style={{
                          fontSize: '0.9rem',
                          color: '#6c757d',
                          fontWeight: '500'
                        }}
                      >
                        Paso {index + 1} de {businessSteps.length}
                      </div>
                    </div>
                  </div>
                  <div 
                    className="chevron-icon"
                    style={{
                      color: step.color,
                      transition: 'transform 0.3s ease-in-out',
                      transform: openStep === step.id ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown size={24} />
                  </div>
                </Card.Header>
                
                <Collapse in={openStep === step.id}>
                  <div>
                    <Card.Body 
                      className="business-step-content p-4 pt-0"
                      style={{
                        backgroundColor: '#f8f9fa',
                        borderTop: `1px solid #e9ecef`
                      }}
                    >
                      <div className="ps-5 ms-3">
                        <p 
                          className="step-description mb-0"
                          style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: '#495057',
                            fontFamily: 'var(--font-sub)'
                          }}
                        >
                          {step.description}
                        </p>
                        
                        {/* Additional content based on step */}
                        {step.id === 'open-business' && (
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>✓ Sin trámites complicados</strong>
                                  <p className="mb-0 small text-muted">Nos encargamos de toda la documentación legal</p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>✓ Operación inmediata</strong>
                                  <p className="mb-0 small text-muted">Comienza a vender desde el primer día</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.id === 'access-suppliers' && (
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>✓ Proveedores verificados</strong>
                                  <p className="mb-0 small text-muted">Red de socios confiables y establecidos</p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>✓ Precios preferenciales</strong>
                                  <p className="mb-0 small text-muted">Mejores condiciones por volumen grupal</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.id === 'manage-business' && (
                          <div className="mt-4">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>📱 App de cobro</strong>
                                  <p className="mb-0 small text-muted">POS móvil completo</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>🌐 Tienda online</strong>
                                  <p className="mb-0 small text-muted">Vende 24/7 en internet</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="benefit-item mb-3">
                                  <strong style={{ color: step.color }}>📊 Analytics</strong>
                                  <p className="mb-0 small text-muted">Reportes en tiempo real</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Card.Body>
                  </div>
                </Collapse>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
} 