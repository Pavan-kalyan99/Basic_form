import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import { Auth } from './Components/Auth';

const App: React.FC = () => {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Auth>
    </Router>
  );
};

export default App;
