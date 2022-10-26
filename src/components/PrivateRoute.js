import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="w-28 h-28 mx-auto my-60 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;