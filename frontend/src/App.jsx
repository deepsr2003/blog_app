// src/App.jsx

import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PostForm from './pages/PostForm';
import { useAuth } from './context/AuthContext';

// 1. Import your new Dither component
import Dither from './ui/Dither/Dither.jsx';

function App() {
  const { token } = useAuth();

  return (
    // Use a <main> tag for semantics.
    <main>
      {/* 2. Render the Dither component as the background */}
      <div className="fixed inset-0 -z-10">
        <Dither
          waveColor={[0.1, 0.1, 0.2]}
          pixelSize={3}
          waveFrequency={2.5}
        /> {/* THE FIX: Dither is now self-closing */}
      </div>

      {/* 3. This is your existing content, now placed on top of the background */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center p-4 sm:p-8">
        <div className="w-full max-w-5xl text-center">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/dashboard" />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/posts/new" element={token ? <PostForm /> : <Navigate to="/login" />} />
            <Route path="/posts/edit/:id" element={token ? <PostForm /> : <Navigate to="/login" />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </main> /* THE FIX: Closing the <main> tag correctly */
  );
}

export default App;
