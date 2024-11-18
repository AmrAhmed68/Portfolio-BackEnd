import './Admin.css'
import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

const Login = () => {
  const [authToken, setAuthToken] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(null);

  const handleTokenSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/api/dashboard`, {
        params: { authToken }
      });

      if (response.status === 200) {
        setIsAuthorized(true);
        setError(null);
      }
    } catch (err) {
      setError('Invalid or expired token.');
      setIsAuthorized(false);
    }
  };

  return (
    <div>
      {isAuthorized ? (
        <Dashboard />
      ) : (
        <div className='Admin'>
          <h2>Admin Login</h2>
          <form onSubmit={handleTokenSubmit}>
            <input className='Admin'
              type="text"
              placeholder="Enter Admin Token"
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
              required
            />
            
            <button style={{ marginTop : "20px" , marginBottom : "20px"}} className = "pass" type="submit">Access Dashboard</button>

          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
