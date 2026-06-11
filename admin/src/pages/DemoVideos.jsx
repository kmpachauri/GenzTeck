import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Video, ExternalLink, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const CATEGORY_OPTIONS = ['product_demo', 'tutorial', 'case_study', 'testimonial', 'webinar', 'other'];
const STATUS_OPTIONS = ['published', 'draft', 'archived'];

const emptyForm = {
  title: '', category: 'product_demo', description: '', thumbnail: '',
  videoUrl: '', status: 'published', isActive: true, sortOrder: 0
};

function DemoVideoModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(item ? { ...item } : emptyForm);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...form, sortOrder: Number(form.sortOrder) };
      if (item?._id) {
        await adminAPI.updateDemoVideo(item._id, payload);
        showToast('Demo video updated!');
      } else {
        await adminAPI.createDemoVideo(payload);
        showToast('Demo video created!');
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
          <h3 className="modal-title">{item ? 'Edit Demo Video' : 'Add Demo Video'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label required">Title</label>
              <input className="form-input" value={form.title} onChange={e => set('title', e.target.value)} required placeholder="Video title" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" value={form.category} onChange={e => set('category', e.target.value)}>
                  {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c.replace('_', ' ')}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select" value={form.status} onChange={e => set('status', e.target.value)}>
                  {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-textarea" value={form.description} onChange={e => set('description', e.target.value)} rows={3} placeholder="Describe this video" />
            </div>
            <div className="form-group">
              <label className="form-label">Thumbnail URL</label>
              <input className="form-input" type="url" value={form.thumbnail} onChange={e => set('thumbnail', e.target.value)} placeholder="https://..." />
              {form.thumbnail && (
                <img src={form.thumbnail} alt="thumb" style={{ marginTop: 8, height: 80, borderRadius: 6, objectFit: 'cover' }} />
              )}
            </div>
            <div className="form-group">
              <label className="form-label required">Video URL (YouTube)</label>
              <input className="form-input" value={form.videoUrl} onChange={e => set('videoUrl', e.target.value)} required placeholder="https://www.youtube.com/watch?v=..." />
            </div>
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
        <div className="confirm-title">Delete Demo Video</div>
        <div className="confirm-desc">Delete <strong>"{name}"</strong>?</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function DemoVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getDemoVideos();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setVideos(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch {
      showToast('Failed to load demo videos', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteDemoVideo(deleteTarget._id);
      showToast('Demo video deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const statusBadge = (status) => {
    const map = { published: 'badge-success', draft: 'badge-warning', archived: 'badge-gray' };
    return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>;
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Demo Videos</h2>
          <p className="page-subtitle">Manage your YouTube demo videos</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Video</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : videos.length === 0 ? (
            <div className="empty-state"><Video size={36} /><p>No demo videos yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Active</th>
                  <th>Sort</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map(v => (
                  <tr key={v._id}>
                    <td>
                      {v.thumbnail
                        ? <img src={v.thumbnail} alt="thumb" style={{ width: 64, height: 40, objectFit: 'cover', borderRadius: 4 }} />
                        : <div style={{ width: 64, height: 40, background: '#E2E8F0', borderRadius: 4, display:'flex',alignItems:'center',justifyContent:'center' }}><Video size={16} color="#94A3B8" /></div>
                      }
                    </td>
                    <td style={{ fontWeight: 600 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {v.title}
                        {v.videoUrl && <a href={v.videoUrl} target="_blank" rel="noreferrer"><ExternalLink size={12} color="#3B82F6" /></a>}
                      </div>
                    </td>
                    <td><span className="badge badge-primary">{v.category?.replace('_', ' ')}</span></td>
                    <td>{statusBadge(v.status)}</td>
                    <td><span className={`badge ${v.isActive ? 'badge-success' : 'badge-gray'}`}>{v.isActive ? 'Yes' : 'No'}</span></td>
                    <td>{v.sortOrder}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(v)}><Pencil size={14} /></button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(v)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && <DemoVideoModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
