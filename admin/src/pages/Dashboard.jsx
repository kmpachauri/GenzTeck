import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, ClipboardList, Settings, Package, FolderOpen,
  Star, TrendingUp, Activity, RefreshCw
} from 'lucide-react';
import { adminAPI } from '../api';

const StatCard = ({ label, value, icon: Icon, colorClass, loading }) => (
  <div className="stat-card">
    <div className="stat-header">
      <div className={`stat-icon ${colorClass}`}>
        <Icon />
      </div>
    </div>
    <div className="stat-value">{loading ? '—' : (value ?? 0)}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const statusBadge = (status) => {
  const map = {
    new: 'badge-primary',
    contacted: 'badge-warning',
    converted: 'badge-success',
    rejected: 'badge-danger',
    pending: 'badge-warning',
    scheduled: 'badge-purple',
    completed: 'badge-success',
    cancelled: 'badge-danger',
  };
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>;
};

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [leads, setLeads] = useState([]);
  const [demoReqs, setDemoReqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, leadsRes, demoRes] = await Promise.all([
        adminAPI.getDashboardStats?.() || adminAPI.getLeads?.(),
        adminAPI.getLeads(),
        adminAPI.getDemoRequests(),
      ]);

      // If dedicated stats endpoint exists
      if (statsRes?.data?.totalLeads !== undefined) {
        setStats(statsRes.data);
      } else {
        // Build stats from individual calls
        const [svcRes, prodRes, projRes, testiRes] = await Promise.all([
          adminAPI.getServices(),
          adminAPI.getProducts(),
          adminAPI.getProjects(),
          adminAPI.getTestimonials(),
        ]);
        setStats({
          totalLeads: leadsRes.data?.length || leadsRes.data?.total || 0,
          totalDemoRequests: demoRes.data?.length || demoRes.data?.total || 0,
          totalServices: svcRes.data?.length || svcRes.data?.total || 0,
          totalProducts: prodRes.data?.length || prodRes.data?.total || 0,
          totalProjects: projRes.data?.length || projRes.data?.total || 0,
          totalTestimonials: testiRes.data?.length || testiRes.data?.total || 0,
        });
      }

      const leadsArr = Array.isArray(leadsRes.data) ? leadsRes.data : leadsRes.data?.data || [];
      const demoArr = Array.isArray(demoRes.data) ? demoRes.data : demoRes.data?.data || [];
      setLeads(leadsArr.slice(0, 5));
      setDemoReqs(demoArr.slice(0, 5));
    } catch (err) {
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const statCards = [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, colorClass: 'blue' },
    { label: 'Demo Requests', value: stats.totalDemoRequests, icon: ClipboardList, colorClass: 'purple' },
    { label: 'Services', value: stats.totalServices, icon: Settings, colorClass: 'green' },
    { label: 'Products', value: stats.totalProducts, icon: Package, colorClass: 'orange' },
    { label: 'Projects', value: stats.totalProjects, icon: FolderOpen, colorClass: 'yellow' },
    { label: 'Testimonials', value: stats.totalTestimonials, icon: Star, colorClass: 'pink' },
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Dashboard</h2>
          <p className="page-subtitle">Welcome back! Here's what's happening with GenzTeck.</p>
        </div>
        <button className="btn btn-outline btn-sm" onClick={fetchData} disabled={loading}>
          <RefreshCw size={14} className={loading ? 'spin' : ''} /> Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {statCards.map(card => (
          <StatCard key={card.label} {...card} loading={loading} />
        ))}
      </div>

      {/* Tables Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Latest Leads */}
        <div className="card">
          <div className="card-header">
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Users size={16} /> Latest Leads
            </span>
            <Link to="/admin/leads" className="btn btn-outline btn-sm">View All</Link>
          </div>
          <div className="table-wrapper">
            {loading ? (
              <div className="loading-spinner"><div className="spinner" /> Loading...</div>
            ) : leads.length === 0 ? (
              <div className="empty-state">
                <Users size={32} />
                <p>No leads yet</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr key={lead._id || i}>
                      <td style={{ fontWeight: 500 }}>{lead.name}</td>
                      <td className="text-muted text-small">{lead.phone}</td>
                      <td>{statusBadge(lead.status)}</td>
                      <td className="text-muted text-small">{formatDate(lead.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Latest Demo Requests */}
        <div className="card">
          <div className="card-header">
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <ClipboardList size={16} /> Demo Requests
            </span>
            <Link to="/admin/demo-requests" className="btn btn-outline btn-sm">View All</Link>
          </div>
          <div className="table-wrapper">
            {loading ? (
              <div className="loading-spinner"><div className="spinner" /> Loading...</div>
            ) : demoReqs.length === 0 ? (
              <div className="empty-state">
                <ClipboardList size={32} />
                <p>No demo requests yet</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Demo</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {demoReqs.map((req, i) => (
                    <tr key={req._id || i}>
                      <td style={{ fontWeight: 500 }}>{req.name}</td>
                      <td className="text-muted text-small truncate">{req.demoInterested}</td>
                      <td>{statusBadge(req.status)}</td>
                      <td className="text-muted text-small">{formatDate(req.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
