import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = (): boolean => {
  return localStorage.getItem('loginStatus') === 'true';
};

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation(); 

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;