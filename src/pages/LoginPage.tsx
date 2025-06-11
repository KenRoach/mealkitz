import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, InputGroup } from 'react-bootstrap';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function LoginPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Por favor, completa todos los campos.');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un email válido.');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual authentication logic
      console.log('Login attempt:', { email: formData.email, rememberMe: formData.rememberMe });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success (replace with actual login logic)
      alert('¡Inicio de sesión exitoso! (Demo)');
      
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SimpleNavbar />
      
      {/* Login Section */}
      <Container 
        fluid 
        className="d-flex align-items-center justify-content-center py-5" 
        style={{ 
          minHeight: '80vh', 
          backgroundColor: 'var(--bs-body-bg)'
        }}
      >
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={4}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-4 p-md-5 p-lg-6">
                {/* Header */}
                <div className="text-center mb-4 mb-md-5">
                  <h1 className="fw-bold mb-3" style={{ color: 'var(--bs-primary)' }}>
                    Iniciar Sesión
                  </h1>
                  <p className="text-muted mb-0">
                    Accede a tu cuenta de Mealkitz
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                {/* Login Form */}
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3 g-md-4">
                    {/* Email Field */}
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">
                          <Mail size={16} className="me-2" />
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          className="py-3"
                          disabled={isLoading}
                        />
                      </Form.Group>
                    </Col>

                    {/* Password Field */}
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label className="fw-semibold mb-2">
                          <Lock size={16} className="me-2" />
                          Contraseña
                        </Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Tu contraseña"
                            className="py-3"
                            disabled={isLoading}
                          />
                          <Button
                            variant="outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isLoading}
                            style={{ borderLeft: 'none' }}
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </Button>
                        </InputGroup>
                      </Form.Group>
                    </Col>

                    {/* Remember Me & Forgot Password */}
                    <Col xs={12}>
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Check
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          label="Recordarme"
                          disabled={isLoading}
                        />
                        <Link 
                          to="/forgot-password" 
                          className="text-decoration-none"
                          style={{ color: 'var(--bs-primary)' }}
                        >
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                    </Col>

                    {/* Login Button */}
                    <Col xs={12}>
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-100 py-3 fw-semibold"
                        style={{ fontSize: '1.1rem' }}
                        disabled={isLoading}
                      >
                        {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                      </Button>
                    </Col>

                    {/* Divider */}
                    <Col xs={12}>
                      <div className="text-center my-3 my-md-4">
                        <span className="text-muted">o</span>
                      </div>
                    </Col>

                    {/* Register Link */}
                    <Col xs={12}>
                      <div className="text-center">
                        <p className="mb-0 text-muted">
                          ¿No tienes una cuenta?{' '}
                          <Link 
                            to="/register" 
                            className="text-decoration-none fw-semibold"
                            style={{ color: 'var(--bs-primary)' }}
                          >
                            Regístrate aquí
                          </Link>
                        </p>
                      </div>
                    </Col>

                    {/* Back to Home */}
                    <Col xs={12}>
                      <div className="text-center mt-3">
                        <Link 
                          to="/" 
                          className="text-decoration-none text-muted"
                        >
                          ← Volver al inicio
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
} 