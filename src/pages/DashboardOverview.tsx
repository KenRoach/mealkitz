import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Temporarily commenting out recharts to fix build issues
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DashboardOverview() {
  // Temporarily commenting out chart data
  // const data = [
  //   { name: 'Jan', sales: 4000, orders: 2400 },
  //   { name: 'Feb', sales: 3000, orders: 1398 },
  //   { name: 'Mar', sales: 2000, orders: 9800 },
  //   { name: 'Apr', sales: 2780, orders: 3908 },
  //   { name: 'May', sales: 1890, orders: 4800 },
  //   { name: 'Jun', sales: 2390, orders: 3800 },
  // ];

  return (
    <Container fluid className="py-4">
      <Row>
        <Col>
          <h1>Dashboard Overview</h1>
          <Card>
            <Card.Body>
              <Card.Title>Sales Overview</Card.Title>
              <Card.Text>
                Dashboard functionality coming soon. Charts temporarily disabled to fix build issues.
              </Card.Text>
              {/* Temporarily commenting out chart
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                  <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
              */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 