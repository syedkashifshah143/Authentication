import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import AddNewUser from './AddNewUser'; 
import GetAllUser from './GetAllUser'; 
import StatsOverview from './StatsOverview '; 

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Routes>
          <Route path="/" element={<h2>Welcome to the Admin Dashboard!</h2>} />
          <Route path="/users" element={<GetAllUser />} />
          <Route path="/newuser" element={<AddNewUser />} />
          <Route path="/stats" element={<StatsOverview />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
