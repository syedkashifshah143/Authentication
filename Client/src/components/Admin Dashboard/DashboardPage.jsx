import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard'
import { useAuth } from '../Login/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Dashboard</h2>
        {user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </div>
  );
};

export default DashboardPage;
