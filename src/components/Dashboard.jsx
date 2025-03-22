import React from 'react'

function Dashboard() {
   
        const data = [
          { title: 'Total Users', value: 1250, color: 'bg-blue-500' },
          { title: 'Active Users', value: 875, color: 'bg-green-500' },
          { title: 'New Orders', value: 320, color: 'bg-yellow-500' },
          { title: 'Revenue', value: '$15,000', color: 'bg-red-500' },
        ];
      
        return (
          <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-white shadow p-4 mb-4 rounded-md">
              <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-md shadow-md ${item.color} text-white`}
                >
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white p-6 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-2">User "John Doe" logged in.</li>
                <li className="py-2">New order #12345 placed.</li>
                <li className="py-2">Product "Widget X" updated.</li>
                <li className="py-2">User "Jane Smith" registered.</li>
              </ul>
            </div>
          </div>
        );
}

export default Dashboard
