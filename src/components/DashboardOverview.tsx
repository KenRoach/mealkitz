import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

// Mock data for the table
const topProducts = [
  { id: 1, name: 'Gourmet Burger Kit', quantity: 120, revenue: 1800 },
  { id: 2, name: 'Vegan Pasta Kit', quantity: 90, revenue: 1350 },
  { id: 3, name: 'Taco Night Kit', quantity: 80, revenue: 1200 },
  { id: 4, name: 'Sushi Making Kit', quantity: 60, revenue: 1500 },
  { id: 5, name: 'Breakfast Box', quantity: 150, revenue: 1125 },
];

const DashboardOverview: React.FC = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Sales Overview</Card.Title>
            <Card.Text>
              Sales charts will be available soon. Dashboard functionality is being developed.
            </Card.Text>
            <div className="bg-light p-4 text-center rounded">
              <h5>Total Sales: $7,975</h5>
              <p className="text-muted">Last 7 days performance</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Card.Title>Top Selling Products</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity Sold</th>
                  <th>Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>${product.revenue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardOverview; 