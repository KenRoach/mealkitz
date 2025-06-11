import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';
import POSPage from './pages/POSPage';
import StorePage from './pages/StorePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

// Simple component to protect routes (placeholder for now)
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // For now, just render children - you can add authentication logic later
  return <>{children}</>;
};

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/mealkitz' : '';
  
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router basename={basename}>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              } />
              <Route path="/dashboard/overview" element={
                <PrivateRoute>
                  <DashboardOverview />
                </PrivateRoute>
              } />
              <Route path="/pos" element={
                <PrivateRoute>
                  <POSPage />
                </PrivateRoute>
              } />
              <Route path="/store" element={
                <PrivateRoute>
                  <StorePage />
                </PrivateRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App; 