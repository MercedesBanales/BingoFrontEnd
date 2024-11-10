import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store.ts'; 

interface GuardedRouteProps {
  element: React.ReactNode;
}

const GuardedRoute = ({ element }: GuardedRouteProps) => {
  const { token } = useSelector((state: RootState) => state.auth); 

  if (token === '') {
    return <Navigate to="/unauthorized" />;
  }

  return <>{element}</>;
};

export default GuardedRoute;
