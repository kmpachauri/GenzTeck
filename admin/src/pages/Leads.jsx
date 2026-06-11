import React, { useEffect, useState } from 'react';
import { Users, Trash2, ChevronDown, ChevronUp, Save } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const STATUS_OPTIONS = ['new', 'contacted', 'converted', 'rejected'];

const formatDate = (d) => d
  ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  : '—';

const statusBadge = (status) => {
  const map = { new: 'badge-primary', contacted: 'badge-warning', converted: 'badge-success', rejected: 'badge-danger' };
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>;
};

function ConfirmDelete({ onConfirm, onCancel, name }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-dialog">
        <div className="confirm-title">Delete Lead</div>
        <div className="confirm-desc">Delete lead from <strong>"{name}"</strong>? This cannot be undone.</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

function LeadRow({ lead, onStatusChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(lead.status || 'new');
  const [notes, setNotes] = useState(lead.adminNotes || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await adminAPI.updateLeadStatus(lead._id, status);
      await adminAPI.updateLeadNotes(lead._id, notes);
      showToast('Lead updated!');
      onStatusChange(lead._id, status, notes);
    } catch {
      showToast('Failed to update', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <tr
        style={{ cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
      >
        <td>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {expanded ? <ChevronUp size={14} color="#94A3B8" /> : <ChevronDown size={14} color="#94A3B8" />}
            <span style={{ fontWeight: 600 }}>{lead.name}</span>
          </div>
        </td>
        <td className="text-small">{lead.phone}</td>
        <td className="text-small text-muted">{lead.email}</td>
        <td className="text-small">{lead.serviceRequired || '—'}</td>
        <td onClick={e => e.stopPropagation()}>
          <select
            className="filter-select"
            value={status}
            onChange={e => setStatus(e.target.value)}
            style={{ fontSize: 12 }}
          >
            {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </td>
        <td className="text-muted text-small">{formatDate(lead.createdAt)}</td>
        <td onClick={e => e.stopPropagation()}>
          <button
            className="btn btn-ghost btn-icon btn-sm"
            onClick={() => onDelete(lead)}
            style={{ color: 'var(--danger)' }}
          >
            <Trash2 size={14} />
          </button>
        </td>
      </tr>
      {expanded && (
        <tr className="detail-row">
          <td colSpan={7} style={{ padding: 0 }}>
            <div style={{ padding: '16px 20px', background: '#F8FAFC', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14, marginBottom: 14 }}>
                {lead.email && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Email</div>
                    <div style={{ fontSize: 13 }}>{lead.email}</div>
                  </div>
                )}
                {lead.serviceRequired && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Service</div>
                    <div style={{ fontSize: 13 }}>{lead.serviceRequired}</div>
                  </div>
                )}
                {lead.projectDetails && (
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Project Details</div>
                    <div style={{ fontSize: 13, color: '#334155' }}>{lead.projectDetails}</div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#64748B', marginBottom: 4 }}>Notes</label>
                  <textarea
                    className="form-textarea"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Add notes about this lead..."
                    style={{ minHeight: 60 }}
                    onClick={e => e.stopPropagation()}
                  />
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={(e) => { e.stopPropagation(); handleSave(); }}
                  disabled={saving}
                  style={{ flexShrink: 0 }}
                >
                  {saving ? <><div className="spinner" style={{width:12,height:12}} /> Saving</> : <><Save size={13} /> Save</>}
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getLeads();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setLeads(arr);
    } catch {
      showToast('Failed to load leads', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteLead(deleteTarget._id);
      showToast('Lead deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const handleStatusChange = (id, status, notes) => {
    setLeads(prev => prev.map(l => l._id === id ? { ...l, status, notes } : l));
  };

  const filtered = filterStatus === 'all' ? leads : leads.filter(l => l.status === filterStatus);

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Leads</h2>
          <p className="page-subtitle">All leads from the contact form</p>
        </div>
        <div className="filter-bar">
          <select className="filter-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="all">All Statuses</option>
            {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <span style={{ fontSize: 13, color: '#94A3B8' }}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="empty-state"><Users size={36} /><p>No leads found.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(lead => (
                  <LeadRow
                    key={lead._id}
                    lead={lead}
                    onStatusChange={handleStatusChange}
                    onDelete={setDeleteTarget}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {deleteTarget && <ConfirmDelete name={deleteTarget.name} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
