import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Star, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const TYPE_OPTIONS = ['text', 'video', 'photo'];

const emptyForm = {
  name: '', businessName: '', rating: 5, type: 'text',
  reviewText: '', image: '', videoUrl: '', isActive: true, sortOrder: 0
};

function StarRating({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 2,
            color: n <= value ? '#F59E0B' : '#D1D5DB', fontSize: '22px'
          }}
        >★</button>
      ))}
    </div>
  );
}

function TestimonialModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(item ? { ...item } : emptyForm);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...form, sortOrder: Number(form.sortOrder), rating: Number(form.rating) };
      if (item?._id) {
        await adminAPI.updateTestimonial(item._id, payload);
        showToast('Testimonial updated!');
      } else {
        await adminAPI.createTestimonial(payload);
        showToast('Testimonial created!');
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
          <h3 className="modal-title">{item ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label required">Name</label>
                <input className="form-input" value={form.name} onChange={e => set('name', e.target.value)} required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Business Name</label>
                <input className="form-input" value={form.businessName} onChange={e => set('businessName', e.target.value)} placeholder="Company Pvt Ltd" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Rating</label>
                <StarRating value={form.rating} onChange={v => set('rating', v)} />
              </div>
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-select" value={form.type} onChange={e => set('type', e.target.value)}>
                  {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Review Text</label>
              <textarea className="form-textarea" value={form.reviewText} onChange={e => set('reviewText', e.target.value)} rows={4} placeholder="What the customer said..." />
            </div>
            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input className="form-input" type="url" value={form.image} onChange={e => set('image', e.target.value)} placeholder="https://..." />
              {form.image && (
                <img src={form.image} alt="avatar" style={{ marginTop: 8, width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
              )}
            </div>
            {form.type === 'video' && (
              <div className="form-group">
                <label className="form-label">Video URL</label>
                <input className="form-input" value={form.videoUrl} onChange={e => set('videoUrl', e.target.value)} placeholder="YouTube URL" />
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Sort Order</label>
                <input className="form-input" type="number" value={form.sortOrder} onChange={e => set('sortOrder', e.target.value)} min="0" />
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 6 }}>
                <div className="toggle-group">
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
        <div className="confirm-title">Delete Testimonial</div>
        <div className="confirm-desc">Delete testimonial from <strong>"{name}"</strong>?</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getTestimonials();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setItems(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch {
      showToast('Failed to load testimonials', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteTestimonial(deleteTarget._id);
      showToast('Testimonial deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const renderStars = (rating) => (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(n => (
        <span key={n} style={{ color: n <= rating ? '#F59E0B' : '#D1D5DB', fontSize: 13 }}>★</span>
      ))}
    </div>
  );

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Testimonials</h2>
          <p className="page-subtitle">Manage customer reviews and testimonials</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Testimonial</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : items.length === 0 ? (
            <div className="empty-state"><Star size={36} /><p>No testimonials yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Business</th>
                  <th>Rating</th>
                  <th>Type</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(t => (
                  <tr key={t._id}>
                    <td>
                      {t.image
                        ? <img src={t.image} alt="avatar" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
                        : <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#E2E8F0', display:'flex',alignItems:'center',justifyContent:'center', fontSize: 14, fontWeight: 600, color: '#64748B' }}>
                            {t.name?.[0]?.toUpperCase()}
                          </div>
                      }
                    </td>
                    <td style={{ fontWeight: 600 }}>{t.name}</td>
                    <td className="text-muted text-small">{t.businessName}</td>
                    <td>{renderStars(t.rating)}</td>
                    <td><span className="badge badge-primary">{t.type}</span></td>
                    <td><span className={`badge ${t.isActive ? 'badge-success' : 'badge-gray'}`}>{t.isActive ? 'Yes' : 'No'}</span></td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(t)}><Pencil size={14} /></button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(t)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && <TestimonialModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.name} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
