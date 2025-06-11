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
          minHeight: '85vh', 
          backgroundColor: '#f8f9fa'
        }}
      >
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4}>
            <Card className="border-0 shadow-lg auth-card">
              <Card.Body className="p-5">
                {/* Header */}
                <div className="text-center mb-5">
                  <h1 className="auth-title mb-3">
                    Iniciar Sesión
                  </h1>
                  <p className="auth-subtitle mb-0">
                    Accede a tu cuenta de Mealkitz
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="danger" className="mb-4 auth-alert">
                    {error}
                  </Alert>
                )}

                {/* Login Form */}
                <Form onSubmit={handleSubmit} className="auth-form">
                  {/* Email Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Mail size={18} className="me-2" />
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="auth-input"
                      disabled={isLoading}
                    />
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Lock size={18} className="me-2" />
                      Contraseña
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Tu contraseña"
                        className="auth-input"
                        disabled={isLoading}
                        style={{ borderRight: 'none' }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                        className="auth-password-toggle"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      label="Recordarme"
                      disabled={isLoading}
                      className="auth-checkbox"
                    />
                    <Link 
                      to="/forgot-password" 
                      className="auth-link"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-100 auth-button mb-4"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                  </Button>

                  {/* Divider */}
                  <div className="text-center mb-4">
                    <span className="auth-divider">o</span>
                  </div>

                  {/* Register Link */}
                  <div className="text-center mb-3">
                    <p className="mb-0 auth-secondary-text">
                      ¿No tienes una cuenta?{' '}
                      <Link 
                        to="/register" 
                        className="auth-link-primary"
                      >
                        Regístrate aquí
                      </Link>
                    </p>
                  </div>

                  {/* Back to Home */}
                  <div className="text-center">
                    <Link 
                      to="/" 
                      className="auth-back-link"
                    >
                      ← Volver al inicio
                    </Link>
                  </div>
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