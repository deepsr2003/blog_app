// src/pages/Landing.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CenteredLayout from '../components/CenteredLayout'; // <-- Import

const Landing = () => {
  return (
    <CenteredLayout> {/* <-- Use the layout component */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Welcome to ChronoLog</h1>
        <p className="mb-8 mt-4 text-lg text-neutral-300">Share your thoughts, see what others are saying.</p>
        <div className="flex justify-center gap-4">
          <Link to="/login"><button className="bg-indigo-600 hover:bg-indigo-500">Log In</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </div>
    </CenteredLayout>
  );
};

export default Landing;
