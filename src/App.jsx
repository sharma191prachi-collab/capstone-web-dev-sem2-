// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <Router>
      <JobProvider>
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 py-8">
            <AppRoutes />
          </main>
        </div>
      </JobProvider>
    </Router>
  );
}

export default App;