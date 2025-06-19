import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const { auth } = useSelector((state) => state.auth);
    return auth && auth.isAdmin? <Outlet /> : <Navigate to='/login' replace />;
}

export default AdminRoute