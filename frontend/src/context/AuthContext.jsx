//src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Decode user from token or fetch from a /me endpoint
      // For simplicity, we just store the token and user info on login
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [token]);
  
  const handleLogin = async (credentials) => {
    try {
      const { data } = await api.login(credentials);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({ id: data.id, username: data.username }));
      setToken(data.token);
      setUser({ id: data.id, username: data.username });
      navigate('/dashboard');
    } catch (error) {
      console.error("Login failed:", error);
      alert('Login failed. Check credentials.');
    }
  };

  const handleSignup = async (credentials) => {
    try {
        const { data } = await api.signup(credentials);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({ id: data.id, username: data.username }));
        setToken(data.token);
        setUser({ id: data.id, username: data.username });
        navigate('/dashboard');
    } catch (error) {
        console.error("Signup failed:", error);
        alert('Signup failed. Username may already exist.');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  const value = { user, token, login: handleLogin, signup: handleSignup, logout: handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
