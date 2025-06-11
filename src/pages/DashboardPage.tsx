import React from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardOverview from '../components/DashboardOverview';

export default function DashboardPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Dashboard</h1>
          <p className="lead">Welcome, {currentUser?.name || 'User'}!</p>
        </div>
        <Button variant="outline-danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}

      <DashboardOverview />
    </Container>
  );
} 