import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Package, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const STATUS_OPTIONS = ['coming_soon', 'beta', 'active', 'discontinued'];

const emptyForm = {
  name: '', shortDescription: '', fullDescription: '', websiteUrl: '',
  features: '', useCases: '', status: 'active', isActive: true, sortOrder: 0
};

function ProductModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(
    item
      ? { ...item, features: (item.features || []).join(', '), useCases: (item.useCases || []).join(', ') }
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
        useCases: form.useCases.split(',').map(s => s.trim()).filter(Boolean),
        sortOrder: Number(form.sortOrder),
      };
      if (item?._id) {
        await adminAPI.updateProduct(item._id, payload);
        showToast('Product updated!');
      } else {
        await adminAPI.createProduct(payload);
        showToast('Product created!');
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
      <div className="modal modal-lg">
        <div className="modal-header">
          <h3 className="modal-title">{item ? 'Edit Product' : 'Add Product'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label required">Name</label>
                <input className="form-input" value={form.name} onChange={e => set('name', e.target.value)} required placeholder="Product name" />
              </div>
              <div className="form-group">
                <label className="form-label">Website URL</label>
                <input className="form-input" type="url" value={form.websiteUrl} onChange={e => set('websiteUrl', e.target.value)} placeholder="https://..." />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Short Description</label>
              <input className="form-input" value={form.shortDescription} onChange={e => set('shortDescription', e.target.value)} placeholder="Brief overview" />
            </div>
            <div className="form-group">
              <label className="form-label">Full Description</label>
              <textarea className="form-textarea" value={form.fullDescription} onChange={e => set('fullDescription', e.target.value)} rows={3} />
            </div>
            <div className="form-group">
              <label className="form-label">Features <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.features} onChange={e => set('features', e.target.value)} rows={2} placeholder="Feature 1, Feature 2" />
            </div>
            <div className="form-group">
              <label className="form-label">Use Cases <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.useCases} onChange={e => set('useCases', e.target.value)} rows={2} placeholder="Use case 1, Use case 2" />
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
        <div className="confirm-title">Delete Product</div>
        <div className="confirm-desc">Delete <strong>"{name}"</strong>? This cannot be undone.</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getProducts();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setProducts(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch (err) {
      showToast('Failed to load products', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteProduct(deleteTarget._id);
      showToast('Product deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const statusBadge = (status) => {
    const map = { active: 'badge-success', beta: 'badge-warning', coming_soon: 'badge-primary', discontinued: 'badge-danger' };
    return <span className={`badge ${map[status] || 'badge-gray'}`}>{status?.replace('_', ' ')}</span>;
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Products</h2>
          <p className="page-subtitle">Manage your product portfolio</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Product</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : products.length === 0 ? (
            <div className="empty-state"><Package size={36} /><p>No products yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Short Description</th>
                  <th>Status</th>
                  <th>Active</th>
                  <th>Sort</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p._id}>
                    <td style={{ fontWeight: 600 }}>{p.name}</td>
                    <td className="text-muted truncate text-small">{p.shortDescription}</td>
                    <td>{statusBadge(p.status)}</td>
                    <td><span className={`badge ${p.isActive ? 'badge-success' : 'badge-gray'}`}>{p.isActive ? 'Yes' : 'No'}</span></td>
                    <td>{p.sortOrder}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(p)}><Pencil size={14} /></button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(p)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && <ProductModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.name} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
