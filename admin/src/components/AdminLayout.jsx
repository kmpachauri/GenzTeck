import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Menu, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const pageTitles = {
  '/admin/dashboard': 'Dashboard',
  '/admin/services': 'Services',
  '/admin/products': 'Products',
  '/admin/projects': 'Projects',
  '/admin/demos': 'Demos',
  '/admin/demo-videos': 'Demo Videos',
  '/admin/testimonials': 'Testimonials',
  '/admin/leads': 'Leads',
  '/admin/demo-requests': 'Demo Requests',
  '/admin/blogs': 'Blogs',
  '/admin/settings': 'Settings',
};

export default function AdminLayout() {
  const { user, loading, logout } = useAuth();
  const isLoading = loading;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="loading-spinner" style={{ height: '100vh' }}>
        <div className="spinner" />
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const pageTitle = pageTitles[location.pathname] || 'Admin';
  const initials = user?.email ? user.email.slice(0, 2).toUpperCase() : 'AD';

  return (
    <div className="admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </button>
            <div>
              <div className="header-title">{pageTitle}</div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-user">
              <div className="header-avatar">{initials}</div>
              <div className="header-user-info">
                <span className="header-user-name">
                  {user?.name || user?.email || 'Admin'}
                </span>
                <span className="header-user-role">Administrator</span>
              </div>
            </div>
            <button
              className="btn btn-ghost btn-icon"
              onClick={handleLogout}
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
