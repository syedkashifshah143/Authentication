import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-full shadow-md">
      <h2 className="text-xl font-bold p-4">Admin Panel</h2>
      <ul className="space-y-2 p-4">
        <li>
          <Link to="/admin" className="block p-2 hover:bg-gray-200">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users" className="block p-2 hover:bg-gray-200">User Management</Link>
        </li>
        <li>
          <Link to="/admin/newuser" className="block p-2 hover:bg-gray-200">Add New User</Link>
        </li>
        <li>
          <Link to="/admin/stats" className="block p-2 hover:bg-gray-200">Statistics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
