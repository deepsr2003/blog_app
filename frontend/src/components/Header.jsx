//src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { logout } = useAuth();
  return (
    <header className="mb-8 flex w-full items-center justify-between border-b border-neutral-700 pb-4">
      <Link to="/dashboard">
        <h1 className="text-3xl font-bold text-white no-underline">ChronoLog</h1>
      </Link>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
