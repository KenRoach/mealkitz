import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

export default function DashboardLayout() {
  return (
    <div className="d-flex" style={{ minHeight: '80vh' }}>
      <Nav className="flex-column bg-light p-3" style={{ width: '220px' }}>
        <Nav.Link as={NavLink} to="" end>
          Visión General
        </Nav.Link>
      </Nav>
      <div className="flex-grow-1 p-4">
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  );
} 