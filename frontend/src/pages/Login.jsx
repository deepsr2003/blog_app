// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CenteredLayout from '../components/CenteredLayout'; // <-- Import

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <CenteredLayout> {/* <-- Use the layout component */}
      <div className="mx-auto flex w-full max-w-sm flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold">Log In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500">Log In</button>
        </form>
        <p className="text-sm text-neutral-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </CenteredLayout>
  );
};

export default Login;
