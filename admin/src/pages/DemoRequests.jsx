import React, { useEffect, useState } from 'react';
import { ClipboardList, Trash2, ChevronDown, ChevronUp, Save } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const STATUS_OPTIONS = ['new', 'contacted', 'scheduled', 'completed', 'cancelled'];

const formatDate = (d) => d
  ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  : '—';

const statusBadge = (status) => {
  const map = {
    new: 'badge-primary', contacted: 'badge-warning',
    scheduled: 'badge-purple', completed: 'badge-success', cancelled: 'badge-danger'
  };
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>;
};

function ConfirmDelete({ onConfirm, onCancel, name }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-dialog">
        <div className="confirm-title">Delete Demo Request</div>
        <div className="confirm-desc">Delete request from <strong>"{name}"</strong>?</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

function RequestRow({ req, onStatusChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState(req.status || 'new');
  const [notes, setNotes] = useState(req.adminNotes || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await adminAPI.updateDemoRequestStatus(req._id, status);
      await adminAPI.updateDemoRequestNotes(req._id, notes);
      showToast('Request updated!');
      onStatusChange(req._id, status, notes);
    } catch {
      showToast('Failed to update', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <tr style={{ cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
        <td>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {expanded ? <ChevronUp size={14} color="#94A3B8" /> : <ChevronDown size={14} color="#94A3B8" />}
            <span style={{ fontWeight: 600 }}>{req.name}</span>
          </div>
        </td>
        <td className="text-small">{req.phone}</td>
        <td className="text-small text-muted">{req.email}</td>
        <td className="text-small truncate">{req.demoInterestedIn || '—'}</td>
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
        <td className="text-muted text-small">{formatDate(req.createdAt)}</td>
        <td onClick={e => e.stopPropagation()}>
          <button
            className="btn btn-ghost btn-icon btn-sm"
            onClick={() => onDelete(req)}
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
                {req.email && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Email</div>
                    <div style={{ fontSize: 13 }}>{req.email}</div>
                  </div>
                )}
                {req.preferredDate && (
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Preferred Date</div>
                    <div style={{ fontSize: 13 }}>{formatDate(req.preferredDate)}</div>
                  </div>
                )}
                {req.message && (
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 3 }}>Message</div>
                    <div style={{ fontSize: 13, color: '#334155' }}>{req.message}</div>
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
                    placeholder="Add notes about this request..."
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

export default function DemoRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getDemoRequests();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setRequests(arr);
    } catch {
      showToast('Failed to load demo requests', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteDemoRequest(deleteTarget._id);
      showToast('Demo request deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const handleStatusChange = (id, status, notes) => {
    setRequests(prev => prev.map(r => r._id === id ? { ...r, status, notes } : r));
  };

  const filtered = filterStatus === 'all' ? requests : requests.filter(r => r.status === filterStatus);

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Demo Requests</h2>
          <p className="page-subtitle">All incoming demo booking requests</p>
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
            <div className="empty-state"><ClipboardList size={36} /><p>No demo requests found.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Demo Interested</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(req => (
                  <RequestRow
                    key={req._id}
                    req={req}
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
