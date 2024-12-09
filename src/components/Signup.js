import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:3004/api/auth/register', {
        username,
        password,
      });
      setMessage(response.data.message);
      setIsLoading(false);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      setIsLoading(false);
      setMessage(error.response?.data?.message || 'An error occurred, please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #14142b, #1c0131)',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', fontSize: '2rem', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              border: '1px solid #ff6600',
              borderRadius: '5px',
              backgroundColor: '#1c1c2c',
              color: 'white',
              outline: 'none',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '10px',
              fontSize: '1rem',
              border: '1px solid #ff6600',
              borderRadius: '5px',
              backgroundColor: '#1c1c2c',
              color: 'white',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#ff6600',
              border: 'none',
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: '15px',
              color: message.startsWith('User') ? 'red' : 'green',
            }}
          >
            {message}
          </p>
        )}
        <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>
          Already have an account?{' '}
          <a
            href="/login"
            style={{
              color: '#ff6600',
              textDecoration: 'none',
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
