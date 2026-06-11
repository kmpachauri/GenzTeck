import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Settings, Package, FolderOpen, Play, Video,
  Star, Users, ClipboardList, FileText, Cog, LogOut, Zap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { label: 'Services', icon: Settings, path: '/admin/services' },
  { label: 'Products', icon: Package, path: '/admin/products' },
  { label: 'Projects', icon: FolderOpen, path: '/admin/projects' },
  { label: 'Demos', icon: Play, path: '/admin/demos' },
  { label: 'Demo Videos', icon: Video, path: '/admin/demo-videos' },
  { label: 'Testimonials', icon: Star, path: '/admin/testimonials' },
];

const leadItems = [
  { label: 'Leads', icon: Users, path: '/admin/leads' },
  { label: 'Demo Requests', icon: ClipboardList, path: '/admin/demo-requests' },
];

const contentItems = [
  { label: 'Blogs', icon: FileText, path: '/admin/blogs' },
  { label: 'Settings', icon: Cog, path: '/admin/settings' },
];

export default function Sidebar({ isOpen, onClose }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const renderNavItem = (item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}
      onClick={onClose}
    >
      <item.icon />
      <span>{item.label}</span>
    </NavLink>
  );

  return (
    <>
      <div className={`sidebar-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <aside className={`sidebar${isOpen ? ' open' : ''}`}>
        <div className="sidebar-logo">
          <div className="sidebar-logo-inner">
            <div className="sidebar-logo-icon">
              <Zap size={18} />
            </div>
            <div className="sidebar-logo-text">
              <span className="sidebar-logo-name">GenzTeck</span>
              <span className="sidebar-logo-sub">Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Main</div>
          {navItems.map(renderNavItem)}

          <div className="sidebar-section-label">Leads</div>
          {leadItems.map(renderNavItem)}

          <div className="sidebar-section-label">Content</div>
          {contentItems.map(renderNavItem)}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-logout-btn" onClick={handleLogout}>
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
