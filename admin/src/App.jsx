import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/Toast';

import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Demos from './pages/Demos';
import DemoVideos from './pages/DemoVideos';
import Testimonials from './pages/Testimonials';
import Leads from './pages/Leads';
import DemoRequests from './pages/DemoRequests';
import Blogs from './pages/Blogs';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected admin routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="projects" element={<Projects />} />
            <Route path="demos" element={<Demos />} />
            <Route path="demo-videos" element={<DemoVideos />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="leads" element={<Leads />} />
            <Route path="demo-requests" element={<DemoRequests />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>

          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
