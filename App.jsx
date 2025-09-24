
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Portal({ role }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{role} Portal</h1>
      <p>Welcome to the {role} dashboard!</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/patient">Patient</Link>
        <Link to="/doctor">Doctor</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/patient" element={<Portal role="Patient" />} />
        <Route path="/doctor" element={<Portal role="Doctor" />} />
        <Route path="/admin" element={<Portal role="Admin" />} />
      </Routes>
    </Router>
  );
}
