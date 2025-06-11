import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for the chart and table
const salesData = [
  { name: 'Day 1', sales: 4000 },
  { name: 'Day 2', sales: 3000 },
  { name: 'Day 3', sales: 2000 },
  { name: 'Day 4', sales: 2780 },
  { name: 'Day 5', sales: 1890 },
  { name: 'Day 6', sales: 2390 },
  { name: 'Day 7', sales: 3490 },
];

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
            <Card.Title>Sales Last 7 Days</Card.Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
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