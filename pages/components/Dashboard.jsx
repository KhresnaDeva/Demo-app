import React from 'react';

const Dashboard = ({data}) => {
  return (
<div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Hello user, this data from BackEnd</h1>
      {data}
      </div>
    </div>
  );
};

export default Dashboard;
