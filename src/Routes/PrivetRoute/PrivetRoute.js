import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CircleLoader from "react-spinners/CircleLoader";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="h-screen flex justify-center items-center">
            <CircleLoader
                color="#f47074"
                loading
                size={100}
                speedMultiplier={1}
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivetRoute;