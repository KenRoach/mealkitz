import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, InputGroup } from 'react-bootstrap';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleNavbar from '../components/SimpleNavbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function RegisterPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Por favor, completa todos los campos obligatorios.');
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

    // Password validation
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      setIsLoading(false);
      return;
    }

    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setIsLoading(false);
      return;
    }

    // Terms acceptance
    if (!formData.acceptTerms) {
      setError('Debes aceptar los términos y condiciones.');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual registration logic
      console.log('Registration attempt:', { 
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just show success (replace with actual registration logic)
      alert('¡Registro exitoso! (Demo)');
      
    } catch (err) {
      setError('Error al registrar la cuenta. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SimpleNavbar />
      
      {/* Register Section */}
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
                    Registrarse
                  </h1>
                  <p className="auth-subtitle mb-0">
                    Crea tu cuenta en Mealkitz
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="danger" className="mb-4 auth-alert">
                    {error}
                  </Alert>
                )}

                {/* Registration Form */}
                <Form onSubmit={handleSubmit} className="auth-form">
                  {/* Name Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <User size={18} className="me-2" />
                      Nombre completo *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="auth-input"
                      disabled={isLoading}
                    />
                  </Form.Group>

                  {/* Email Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Mail size={18} className="me-2" />
                      Email *
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

                  {/* Phone Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Phone size={18} className="me-2" />
                      Teléfono (opcional)
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+507 0000-0000"
                      className="auth-input"
                      disabled={isLoading}
                    />
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Lock size={18} className="me-2" />
                      Contraseña *
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Mínimo 6 caracteres"
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

                  {/* Confirm Password Field */}
                  <Form.Group className="mb-4">
                    <Form.Label className="auth-label">
                      <Lock size={18} className="me-2" />
                      Confirmar contraseña *
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repite tu contraseña"
                        className="auth-input"
                        disabled={isLoading}
                        style={{ borderRight: 'none' }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        disabled={isLoading}
                        className="auth-password-toggle"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  {/* Terms and Conditions */}
                  <div className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="auth-checkbox"
                      label={
                        <span>
                          Acepto los{' '}
                          <Link to="/terms" className="auth-link">
                            términos y condiciones
                          </Link>
                          {' '}y la{' '}
                          <Link to="/privacy" className="auth-link">
                            política de privacidad
                          </Link>
                        </span>
                      }
                    />
                  </div>

                  {/* Register Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-100 auth-button mb-4"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
                  </Button>

                  {/* Divider */}
                  <div className="text-center mb-4">
                    <span className="auth-divider">o</span>
                  </div>

                  {/* Login Link */}
                  <div className="text-center mb-3">
                    <p className="mb-0 auth-secondary-text">
                      ¿Ya tienes una cuenta?{' '}
                      <Link 
                        to="/login" 
                        className="auth-link-primary"
                      >
                        Inicia sesión aquí
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