import React, { useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';
import {
  ShoppingCart,
  Store,
  PieChart,
  ClipboardList,
  HandCoins,
  CreditCard,
  LineChart,
  Truck,
  BrainCircuit,
  BarChart,
  DollarSign,
  Server,
  PlusCircle,
  Users,
  TrendingUp,
  Percent,
  ArrowRightLeft,
  Sparkles,
  Smartphone
} from 'lucide-react';
import { Whatsapp } from 'react-bootstrap-icons';

const idealForStatic = [
  'Cocina oculta', 'Panaderías artesanales', 'Food trucks', 'Cafeterías boutique',
  'Jugos y bebidas saludables', 'Catering profesional', 'Keto products', 'Heladerías',
  'Fondas caseras', 'Cevicherías', 'Artesanía (pulseras, aretes, collares)', 'Charcuterías',
  'Microcervecerías artesanales', 'Ventas de jabones y cremas',
  'Carrito de comida', 'Pop-up shop', 'Catering comida casera', 'Almuerzos saludables', 'Tienda en línea'
];

// Mobile-first, desktop-friendly Landing page for Mealkitz
export default function LandingPage() {
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
      title: 'POS',
      icon: ShoppingCart,
      subtitle: 'Factura y recibe pagos digitales'
    },
    {
      title: 'Tienda en Línea',
      icon: Store,
      subtitle: 'Comparte tu catálogo y recibe pedidos'
    },
    {
      title: 'Dashboard',
      icon: PieChart,
      subtitle: 'Visualiza tus reportes de ventas'
    }
  ];

  const proveedoresDetails = [
    {
      title: 'Espacios de producción',
      icon: Store,
      subtitle: 'Te conectamos con Cocinas y Espacios certificados para tu negocio'
    },
    {
      title: 'Acceso a equipos',
      icon: HandCoins,
      subtitle: 'Te conectamos con equipos nuevos y usados para tu negocio'
    },
    {
      title: 'Proveedores',
      icon: Truck,
      subtitle: 'Red de proveedores confiables para tu negocio'
    }
  ];

  const papeleoDetails = [
    {
      title: 'Estructura legal',
      icon: ClipboardList,
      subtitle: 'Tu negocio opera bajo nuestra razón social establecida'
    },
    {
      title: 'Manejo fiscal',
      icon: DollarSign,
      subtitle: 'Nos encargamos de todas las obligaciones tributarias'
    },
    {
      title: 'Cumplimiento normativo',
      icon: Server,
      subtitle: 'Garantizamos el cumplimiento de todas las regulaciones'
    }
  ];

  const howItWorksSteps = [
    { text: 'Crea tu perfil, y registra tu negocio', icon: ClipboardList },
    { text: 'Activa el App', icon: Store },
    { text: 'Vende o accede a algunos de los servicios en Mealkitz', icon: HandCoins },
  ];
  
  const pricingDetails = [
    {
      title: 'Sin costos fijos',
      subtitle: 'Solo cobramos una comisión del 10% sobre cada venta. Si no vendes, no pagas.',
      icon: Percent
    },
    {
      title: 'Pago directo a tu cuenta',
      subtitle: 'Deducimos la comisión automáticamente y te transferimos el resto. Los pagos son semanales.',
      icon: ArrowRightLeft
    },
    {
      title: 'Servicios Adicionales',
      subtitle: 'Accede a marketing, analíticas y financiamiento. Paga solo por lo que usas.',
      icon: Sparkles
    },
    {
      title: 'Alineados a tu éxito',
      subtitle: 'Nuestro modelo de negocio está diseñado para crecer contigo. Tu éxito es nuestro éxito.',
      icon: TrendingUp
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
      title: 'Sin papeleo',
      text: 'Te ayudamos a arrancar sin papeleo: tu negocio opera bajo Mealkitz S.A.',
      icon: ClipboardList,
      details: papeleoDetails
    },
    {
      key: 'proveedores',
      title: 'Red de Proveedores',
      text: 'Red de proveedores confiables para tu negocio.',
      icon: Truck,
      details: proveedoresDetails
    },
    {
      key: 'product',
      title: 'App completa',
      text: 'Ponemos en tu mano una app para cobrar en el celular, tener tu tienda online y ver cuántas ventas haces.',
      icon: Smartphone,
      details: productSummary
    }
  ];

  /* ------------------------------------------------------------------
   * JSX - MOBILE FIRST DESIGN
   * ---------------------------------------------------------------- */
  return (
    <>
      {/* Optimized Mobile-First Hero */}
      <Container 
        fluid 
        className="d-flex align-items-center justify-content-center text-center text-white py-5" 
        style={{ 
          minHeight: '70vh', 
          backgroundColor: 'var(--bs-primary)'
        }}
      >
        <div className="px-3 px-md-4">
          <h1 className="hero-title mb-3 mb-md-4">Lanza, Opera y Crece tu negocio</h1>
          <p className="hero-subtitle mb-4 mb-md-5">Para emprendedores gastronómicos, artesanos y pequeños comerciantes que buscan lanzar y gestionar su propio negocio.</p>
          <div className="d-flex justify-content-center">
            <Button 
              variant="secondary" 
              className="hero-btn px-4 py-3"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Únete a la Lista de Espera
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile-First ¿Qué hacemos? */}
      <Container className="py-4 py-md-5 py-lg-6">
        <h2 className="text-center fw-bold mb-4 mb-md-5">¿Qué hacemos?</h2>
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
      </Container>

      {/* Mobile-First Ideal para */}
      <Container fluid className="py-4 py-md-5 py-lg-6" style={{ backgroundColor: 'var(--bs-body-bg)' }}>
        <Container>
          <h2 className="text-center fw-bold mb-4 mb-md-5">Ideal para</h2>
          <div className="text-center">
            {idealForStatic.map((item, index) => (
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
        <h2 className="text-center fw-bold mb-4 mb-md-5">¿Qué cobramos?</h2>
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
    </>
  );
}
