import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await axios.get('http://localhost:8081/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (e) {
      console.error('Error getting user:', e);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
          Welcome to Your Dashboard
        </h1>

        {user ? (
          <div className="card bg-base-100 shadow-xl p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Hello, {user.firstName} {user.lastName} 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base-content">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phoneNumber}</p>
              <p><strong>Role:</strong> <span className="badge badge-primary badge-outline">{user.role}</span></p>
              <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/my-reservations')}
                className="btn btn-primary w-full sm:w-auto"
              >
                View My Reservations
              </button>
              <button
                onClick={() => navigate('/vehicles')}
                className="btn btn-outline w-full sm:w-auto"
              >
                Browse More Vehicles
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-lg text-base-content/70">Loading user info...</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;