import React, { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('rememberedEmail');
    if (data) {
      setAuth(true);
      navigate('/dashboard'); // Redirect to Dashboard if registered
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { useAuth, Auth };
