import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Play, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const STATUS_OPTIONS = ['coming_soon', 'active', 'beta', 'discontinued'];

const emptyForm = {
  title: '', description: '', features: '', status: 'active', isActive: true, sortOrder: 0
};

function DemoModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(
    item
      ? { ...item, features: (item.features || []).join(', ') }
      : emptyForm
  );
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...form,
        features: form.features.split(',').map(s => s.trim()).filter(Boolean),
        sortOrder: Number(form.sortOrder),
      };
      if (item?._id) {
        await adminAPI.updateDemo(item._id, payload);
        showToast('Demo updated!');
      } else {
        await adminAPI.createDemo(payload);
        showToast('Demo created!');
      }
      onSaved();
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to save', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">{item ? 'Edit Demo' : 'Add Demo'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label required">Title</label>
              <input className="form-input" value={form.title} onChange={e => set('title', e.target.value)} required placeholder="Demo title" />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" value={form.description} onChange={e => set('description', e.target.value)} rows={3} placeholder="Describe this demo" />
            </div>
            <div className="form-group">
              <label className="form-label">Features <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.features} onChange={e => set('features', e.target.value)} rows={2} placeholder="Feature 1, Feature 2" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select" value={form.status} onChange={e => set('status', e.target.value)}>
                  {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Sort Order</label>
                <input className="form-input" type="number" value={form.sortOrder} onChange={e => set('sortOrder', e.target.value)} min="0" />
              </div>
            </div>
            <div className="toggle-group">
              <label className="toggle-switch">
                <input type="checkbox" checked={form.isActive} onChange={e => set('isActive', e.target.checked)} />
                <span className="toggle-slider" />
              </label>
              <span className="toggle-label">Active</span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <><div className="spinner" style={{width:14,height:14}} /> Saving...</> : <><Check size={14} /> Save</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ConfirmDelete({ onConfirm, onCancel, name }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-dialog">
        <div className="confirm-title">Delete Demo</div>
        <div className="confirm-desc">Delete <strong>"{name}"</strong>?</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Demos() {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getDemos();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setDemos(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch {
      showToast('Failed to load demos', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteDemo(deleteTarget._id);
      showToast('Demo deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const statusBadge = (status) => {
    const map = { active: 'badge-success', coming_soon: 'badge-primary', beta: 'badge-warning', discontinued: 'badge-danger' };
    return <span className={`badge ${map[status] || 'badge-gray'}`}>{status?.replace('_', ' ')}</span>;
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Demos</h2>
          <p className="page-subtitle">Manage your live product demos</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Demo</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : demos.length === 0 ? (
            <div className="empty-state"><Play size={36} /><p>No demos yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Active</th>
                  <th>Sort</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {demos.map(d => (
                  <tr key={d._id}>
                    <td style={{ fontWeight: 600 }}>{d.title}</td>
                    <td className="text-muted truncate text-small">{d.description}</td>
                    <td>{statusBadge(d.status)}</td>
                    <td><span className={`badge ${d.isActive ? 'badge-success' : 'badge-gray'}`}>{d.isActive ? 'Yes' : 'No'}</span></td>
                    <td>{d.sortOrder}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(d)}><Pencil size={14} /></button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(d)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && <DemoModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
