import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-200 p-4 rounded-lg">
            <h2 className="text-lg font-medium mb-2">Statistics</h2>
            <p>Total Users: 100</p>
            <p>Total Orders: 250</p>
          </div>
          <div className="bg-green-200 p-4 rounded-lg">
            <h2 className="text-lg font-medium mb-2">Recent Activity</h2>
            <ul>
              <li>User registration</li>
              <li>Order placed</li>
              <li>Product added</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
