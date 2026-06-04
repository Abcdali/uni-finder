import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#1e293b] text-white p-6">
        <h1 className="text-2xl font-bold mb-10">
          Uni Finder Admin
        </h1>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-yellow-400">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-yellow-400">
            Students
          </li>

          <li className="cursor-pointer hover:text-yellow-400">
            Universities
          </li>

          <li className="cursor-pointer hover:text-yellow-400">
            Hostels
          </li>

          <li className="cursor-pointer hover:text-yellow-400">
            Settings
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-10 w-full bg-red-500 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Admin Dashboard
          </h2>

          <div className="bg-white px-4 py-2 rounded-lg shadow">
            Welcome Admin 👋
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              150
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Universities</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              25
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Hostels</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              42
            </p>
          </div>

        </div>

        {/* Recent Users */}
        <div className="bg-white rounded-xl shadow mt-8 p-6">
          <h3 className="text-xl font-semibold mb-4">
            Recent Registrations
          </h3>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">Role</th>
                <th className="text-left py-3">Email</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Ali Khan</td>
                <td>Student</td>
                <td>ali@gmail.com</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">UCP Lahore</td>
                <td>University</td>
                <td>ucp@gmail.com</td>
              </tr>

              <tr>
                <td className="py-3">City Hostel</td>
                <td>Hostel</td>
                <td>cityhostel@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;