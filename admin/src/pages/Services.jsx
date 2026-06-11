import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Settings, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const emptyForm = {
  title: '', shortDescription: '', fullDescription: '', icon: '',
  features: '', idealFor: '', isActive: true, sortOrder: 0
};

function ServiceModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(
    item
      ? { ...item, features: (item.features || []).join(', '), idealFor: (item.idealFor || []).join(', ') }
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
        idealFor: form.idealFor.split(',').map(s => s.trim()).filter(Boolean),
        sortOrder: Number(form.sortOrder),
      };
      if (item?._id) {
        await adminAPI.updateService(item._id, payload);
        showToast('Service updated successfully!');
      } else {
        await adminAPI.createService(payload);
        showToast('Service created successfully!');
      }
      onSaved();
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to save service', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal modal-lg">
        <div className="modal-header">
          <h3 className="modal-title">{item ? 'Edit Service' : 'Add Service'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label required">Title</label>
                <input className="form-input" value={form.title} onChange={e => set('title', e.target.value)} required placeholder="Service title" />
              </div>
              <div className="form-group">
                <label className="form-label">Icon (Emoji)</label>
                <input className="form-input" value={form.icon} onChange={e => set('icon', e.target.value)} placeholder="🚀" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Short Description</label>
              <input className="form-input" value={form.shortDescription} onChange={e => set('shortDescription', e.target.value)} placeholder="Brief description" />
            </div>
            <div className="form-group">
              <label className="form-label">Full Description</label>
              <textarea className="form-textarea" value={form.fullDescription} onChange={e => set('fullDescription', e.target.value)} rows={3} placeholder="Detailed description" />
            </div>
            <div className="form-group">
              <label className="form-label">Features <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.features} onChange={e => set('features', e.target.value)} rows={2} placeholder="Feature 1, Feature 2, Feature 3" />
            </div>
            <div className="form-group">
              <label className="form-label">Ideal For <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.idealFor} onChange={e => set('idealFor', e.target.value)} rows={2} placeholder="Startups, SMEs, Enterprises" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Sort Order</label>
                <input className="form-input" type="number" value={form.sortOrder} onChange={e => set('sortOrder', e.target.value)} min="0" />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div className="toggle-group" style={{ marginBottom: '6px' }}>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={form.isActive} onChange={e => set('isActive', e.target.checked)} />
                    <span className="toggle-slider" />
                  </label>
                  <span className="toggle-label">Active</span>
                </div>
              </div>
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
        <div className="confirm-title">Delete Service</div>
        <div className="confirm-desc">Are you sure you want to delete <strong>"{name}"</strong>? This action cannot be undone.</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | 'add' | item
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getServices();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setServices(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch (err) {
      showToast('Failed to load services', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteService(deleteTarget._id);
      showToast('Service deleted');
      setDeleteTarget(null);
      fetchServices();
    } catch (err) {
      showToast('Failed to delete', 'error');
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Services</h2>
          <p className="page-subtitle">Manage your service offerings</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}>
          <Plus size={15} /> Add Service
        </button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : services.length === 0 ? (
            <div className="empty-state">
              <Settings size={36} />
              <p>No services yet. Add your first service.</p>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Title</th>
                  <th>Short Description</th>
                  <th>Sort</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map(svc => (
                  <tr key={svc._id}>
                    <td style={{ fontSize: '22px' }}>{svc.icon || '⚙️'}</td>
                    <td style={{ fontWeight: 600 }}>{svc.title}</td>
                    <td className="text-muted truncate text-small">{svc.shortDescription}</td>
                    <td>{svc.sortOrder}</td>
                    <td>
                      <span className={`badge ${svc.isActive ? 'badge-success' : 'badge-gray'}`}>
                        {svc.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(svc)} title="Edit">
                          <Pencil size={14} />
                        </button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(svc)} title="Delete" style={{ color: 'var(--danger)' }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && (
        <ServiceModal
          item={modal === 'add' ? null : modal}
          onClose={() => setModal(null)}
          onSaved={() => { setModal(null); fetchServices(); }}
        />
      )}

      {deleteTarget && (
        <ConfirmDelete
          name={deleteTarget.title}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
