import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Alert, InputGroup } from 'react-bootstrap';
import { 
  Smartphone, 
  Truck, 
  ClipboardList, 
  Server,
  ShoppingCart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import { Whatsapp } from 'react-bootstrap-icons';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';
import { Link } from 'react-router-dom';

// Mobile-first, desktop-friendly Landing page for Mealkitz
export default function LandingPage() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  /* ------------------------------------------------------------------
   * Waitlist form state & handlers
   * ---------------------------------------------------------------- */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    businessStage: 'Idea',
    provincia: '',
    businessType: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.provincia || !formData.businessType) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // IMPORTANT: Replace with your actual WhatsApp number (e.g., 50761234567)
    const targetWhatsAppNumber = '50761008249'; 

    const message = `*Solicitud de Información sobre Mealkitz*\n\nHola, me gustaría recibir más detalles sobre sus servicios. A continuación, mis datos:\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* +507 ${formData.whatsapp}\n*Etapa de mi Negocio:* ${formData.businessStage}\n*Provincia:* ${formData.provincia}\n*Tipo de Negocio:* ${formData.businessType}\n\nQuedo a la espera de su respuesta. ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', whatsapp: '', businessStage: 'Idea', provincia: '', businessType: '' });
  };

  const toggleCard = (cardName: string) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  /* ------------------------------------------------------------------
   * Helper data arrays
   * ---------------------------------------------------------------- */
  const productSummary = [
    {
      title: t.posTitle,
      icon: ShoppingCart,
      subtitle: t.posSubtitle
    },
    {
      title: t.onlineStoreTitle,
      icon: Truck,
      subtitle: t.onlineStoreSubtitle
    },
    {
      title: t.dashboardTitle,
      icon: BarChart3,
      subtitle: t.dashboardSubtitle
    }
  ];

  const proveedoresDetails = [
    {
      title: t.prov_espacios_produccion,
      icon: Truck,
      subtitle: t.prov_espacios_produccion_sub
    },
    {
      title: t.prov_acceso_equipos,
      icon: CheckCircle,
      subtitle: t.prov_acceso_equipos_sub
    },
    {
      title: t.prov_proveedores,
      icon: Truck,
      subtitle: t.prov_proveedores_sub
    }
  ];

  const papeleoDetails = [
    {
      title: t.papeleo_estructura_legal,
      icon: ClipboardList,
      subtitle: t.papeleo_estructura_legal_sub
    },
    {
      title: t.papeleo_manejo_fiscal,
      icon: CheckCircle,
      subtitle: t.papeleo_manejo_fiscal_sub
    },
    {
      title: t.papeleo_cumplimiento_normativo,
      icon: Server,
      subtitle: t.papeleo_cumplimiento_normativo_sub
    }
  ];

  const pricingDetails = [
    {
      title: t.pricing_no_fixed_costs,
      subtitle: t.pricing_no_fixed_costs_sub,
      icon: CheckCircle
    },
    {
      title: t.pricing_direct_payment,
      subtitle: t.pricing_direct_payment_sub,
      icon: ArrowRight
    },
    {
      title: t.pricing_additional_services,
      subtitle: t.pricing_additional_services_sub,
      icon: CheckCircle
    },
    {
      title: t.pricing_aligned_success,
      subtitle: t.pricing_aligned_success_sub,
      icon: CheckCircle
    }
  ];

  const provinces = [
    'Bocas del Toro', 'Chiriquí', 'Coclé', 'Colón', 'Darién', 'Herrera', 'Los Santos',
    'Panamá', 'Veraguas', 'Panamá Oeste', 'Comarca Emberá-Wounaan',
    'Comarca Guna Yala', 'Comarca Ngäbe-Buglé'
  ];

  const businessTypes = [
    'Restaurante / Fonda', 'Panadería / Repostería', 'Food Truck / Carrito',
    'Cafetería', 'Catering', 'Artesanías', 'Tienda en línea', 'Otro'
  ];

  const queHacemosCards = [
    {
      key: 'papeleo',
      title: 'Abre tu negocio',
      text: 'Te ayudamos a arrancar sin papeleo: tu negocio opera legalmente bajo Mealkitz S.A.',
      icon: ClipboardList,
      details: papeleoDetails
    },
    {
      key: 'proveedores',
      title: 'Accede a Proveedores',
      text: 'Red de proveedores confiables para tu negocio con productos calidad y precios competitivos.',
      icon: Truck,
      details: proveedoresDetails
    },
    {
      key: 'product',
      title: 'Gestiona tu Negocio',
      text: 'Ponemos una app para cobrar en celular, tener tienda online y ver ventas.',
      icon: Smartphone,
      details: productSummary
    }
  ];

  /* ------------------------------------------------------------------
   * JSX - MOBILE FIRST DESIGN
   * ---------------------------------------------------------------- */
  return (
    <>
      <SimpleNavbar />
      
      {/* Hero Section */}
      <Container 
        fluid 
        className="d-flex align-items-center justify-content-center text-center text-white py-5" 
        style={{ 
          minHeight: '70vh', 
          backgroundColor: 'var(--bs-primary)'
        }}
      >
        <div className="px-3 px-md-4">
          <h1 className="hero-title mb-3 mb-md-4">{t.heroTitle}</h1>
          <p className="hero-subtitle mb-4 mb-md-5">{t.heroSubtitle}</p>
          <div className="d-flex justify-content-center">
            <Button 
              variant="secondary" 
              className="hero-btn px-4 py-3"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.heroButton}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile-First ¿Qué hacemos? */}
      <Container className="py-4 py-md-5 py-lg-6">
        <h2 className="text-center fw-bold mb-4 mb-md-5">{t.productSummaryTitle}</h2>
        <Row className="g-3 g-md-4 mb-4 mb-md-5 justify-content-center">
          {queHacemosCards.map((card) => (
            <Col key={card.key} xs={12} md={6} lg={4}>
              <Card 
                className="border-0 shadow-sm hover-card" 
                style={{ cursor: 'pointer' }}
                onClick={() => toggleCard(card.key)}
              >
                <Card.Body className="p-4 p-md-5">
                  <div className="d-flex align-items-start">
                    <div className="text-primary me-3 me-md-4">
                      <card.icon size={70} />
                    </div>
                    <div className="flex-grow-1">
                      <Card.Title as="h3" className="h5 h4-md mb-2 mb-md-3 d-flex align-items-center justify-content-between">
                        <span>{card.title}</span>
                        <span className="ms-2 text-muted" style={{ fontSize: '0.8em' }}>
                          {expandedCard === card.key ? '▲' : '▼'}
                        </span>
                      </Card.Title>
                      <Card.Text className="mb-0">{card.text}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {expandedCard === card.key && (
                <div className="mt-4">
                  <ListGroup variant="flush">
                    {card.details.map(item => (
                      <ListGroup.Item key={item.title} className="d-flex align-items-start border-0 bg-transparent px-0 py-2">
                        <div className="text-primary me-3 mt-1 flex-shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h5 className="fw-bold mb-1">{item.title}</h5>
                          <p className="mb-0 text-muted">{item.subtitle}</p>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              )}
            </Col>
          ))}
        </Row>
        
        {/* Demo Button after ¿Qué hacemos? */}
        <Row className="justify-content-center mt-4 mt-md-5">
          <Col xs="auto">
            <Link to="/business-steps" className="text-decoration-none">
              <Button 
                variant="outline-primary" 
                className="btn-demo px-4 py-3 d-flex align-items-center justify-content-center"
              >
                <Play size={20} className="me-2" />
                Ver Demo Interactivo
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Mobile-First Ideal para */}
      <Container fluid className="py-4 py-md-5 py-lg-6" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
        <Container>
          <h2 className="text-center fw-bold mb-4 mb-md-5">{t.idealForTitle}</h2>
          <div className="text-center">
            {t.idealForItems.map((item: string, index) => (
              <span 
                key={index} 
                className="brick-item d-inline-block me-2 mb-2 mb-md-3"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Container>
      
      {/* Qué cobramos */}
      <Container className="py-4 py-md-5 py-lg-6">
        <h2 className="text-center fw-bold mb-4 mb-md-5">{t.pricingTitle}</h2>
        <Row className="g-3 g-md-4">
          {pricingDetails.map((item, index) => (
            <Col key={index} xs={12} md={6}>
              <div className="d-flex align-items-start p-3 p-md-4">
                <div className="text-primary me-3 me-md-4 flex-shrink-0">
                  <item.icon size={70} />
                </div>
                <div className="flex-grow-1">
                  <h3 className="h5 h4-md fw-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="mb-0 text-muted">{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Demo Button after Pricing */}
        <Row className="justify-content-center mt-4 mt-md-5">
          <Col xs="auto">
            <Link to="/business-steps" className="text-decoration-none">
              <Button 
                variant="outline-primary" 
                className="btn-demo px-4 py-3 d-flex align-items-center justify-content-center"
              >
                <Play size={20} className="me-2" />
                Ver Cómo Funciona
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Mobile-First Waitlist Form */}
      <Container id="waitlist" className="py-4 py-md-5 py-lg-6">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={8} lg={6}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-4 p-md-5 p-lg-6">
                <h2 className="text-center fw-bold mb-3 mb-md-4">Lista de Espera</h2>
                <p className="text-center text-muted mb-4 mb-md-5">
                  Únete a nuestra lista de espera y sé de los primeros en acceder a Mealkitz
                </p>
                
                {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
                
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="g-3 g-md-4">
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">Nombre completo</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          className="py-3"
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="py-3"
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">WhatsApp</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>+507</InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="0000-0000"
                            className="py-3"
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">Etapa de tu negocio</Form.Label>
                        <Form.Select
                          name="businessStage"
                          value={formData.businessStage}
                          onChange={handleChange}
                          className="py-3"
                        >
                          <option value="Idea">Idea</option>
                          <option value="Lanzado">Lanzado</option>
                          <option value="Creciendo">Creciendo</option>
                          <option value="Establecido">Establecido</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">Provincia</Form.Label>
                        <Form.Select
                          name="provincia"
                          value={formData.provincia}
                          onChange={handleChange}
                          className="py-3"
                          required
                        >
                          <option value="" disabled>Selecciona tu provincia</option>
                          {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">Tipo de Negocio</Form.Label>
                        <Form.Select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="py-3"
                          required
                        >
                          <option value="" disabled>Selecciona tu tipo de negocio</option>
                          {businessTypes.map(b => <option key={b} value={b}>{b}</option>)}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    
                    <Col xs={12}>
                      <Button 
                        type="submit" 
                        variant="secondary" 
                        className="w-100 py-3 fw-semibold"
                        style={{ fontSize: '1.1rem' }}
                      >
                        Solicitar Información por WhatsApp
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/50761008249?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Mealkitz."
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Whatsapp />
      </a>
      
      <Footer />
    </>
  );
}
