import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, FolderOpen, Check } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const TYPE_OPTIONS = ['website', 'mobile_app', 'web_app', 'ecommerce', 'saas', 'other'];
const STATUS_OPTIONS = ['in_progress', 'completed', 'on_hold', 'cancelled'];

const emptyForm = {
  title: '', url: '', type: 'website', problem: '', solution: '',
  features: '', techStack: '', result: '', status: 'completed', isActive: true, sortOrder: 0
};

function ProjectModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(
    item
      ? { ...item, features: (item.features || []).join(', '), techStack: (item.techStack || []).join(', ') }
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
        techStack: form.techStack.split(',').map(s => s.trim()).filter(Boolean),
        sortOrder: Number(form.sortOrder),
      };
      if (item?._id) {
        await adminAPI.updateProject(item._id, payload);
        showToast('Project updated!');
      } else {
        await adminAPI.createProject(payload);
        showToast('Project created!');
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
          <h3 className="modal-title">{item ? 'Edit Project' : 'Add Project'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label required">Title</label>
                <input className="form-input" value={form.title} onChange={e => set('title', e.target.value)} required placeholder="Project title" />
              </div>
              <div className="form-group">
                <label className="form-label">URL</label>
                <input className="form-input" type="url" value={form.url} onChange={e => set('url', e.target.value)} placeholder="https://..." />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-select" value={form.type} onChange={e => set('type', e.target.value)}>
                  {TYPE_OPTIONS.map(t => <option key={t} value={t}>{t.replace('_', ' ')}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select" value={form.status} onChange={e => set('status', e.target.value)}>
                  {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Problem</label>
              <textarea className="form-textarea" value={form.problem} onChange={e => set('problem', e.target.value)} rows={2} placeholder="What problem does this solve?" />
            </div>
            <div className="form-group">
              <label className="form-label">Solution</label>
              <textarea className="form-textarea" value={form.solution} onChange={e => set('solution', e.target.value)} rows={2} placeholder="How was it solved?" />
            </div>
            <div className="form-group">
              <label className="form-label">Features <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <textarea className="form-textarea" value={form.features} onChange={e => set('features', e.target.value)} rows={2} />
            </div>
            <div className="form-group">
              <label className="form-label">Tech Stack <span className="form-hint" style={{display:'inline'}}>(comma-separated)</span></label>
              <input className="form-input" value={form.techStack} onChange={e => set('techStack', e.target.value)} placeholder="React, Node.js, MongoDB" />
            </div>
            <div className="form-group">
              <label className="form-label">Result</label>
              <textarea className="form-textarea" value={form.result} onChange={e => set('result', e.target.value)} rows={2} placeholder="Outcome / results achieved" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Sort Order</label>
                <input className="form-input" type="number" value={form.sortOrder} onChange={e => set('sortOrder', e.target.value)} min="0" />
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '6px' }}>
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
        <div className="confirm-title">Delete Project</div>
        <div className="confirm-desc">Delete <strong>"{name}"</strong>? This cannot be undone.</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getProjects();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setProjects(arr.sort((a, b) => a.sortOrder - b.sortOrder));
    } catch {
      showToast('Failed to load projects', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteProject(deleteTarget._id);
      showToast('Project deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const statusBadge = (status) => {
    const map = { completed: 'badge-success', in_progress: 'badge-warning', on_hold: 'badge-gray', cancelled: 'badge-danger' };
    return <span className={`badge ${map[status] || 'badge-gray'}`}>{status?.replace('_', ' ')}</span>;
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Projects</h2>
          <p className="page-subtitle">Showcase your work and case studies</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Project</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : projects.length === 0 ? (
            <div className="empty-state"><FolderOpen size={36} /><p>No projects yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Tech Stack</th>
                  <th>Status</th>
                  <th>Active</th>
                  <th>Sort</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p._id}>
                    <td style={{ fontWeight: 600 }}>{p.title}</td>
                    <td><span className="badge badge-primary">{p.type?.replace('_', ' ')}</span></td>
                    <td className="text-muted text-small truncate">{(p.techStack || []).join(', ')}</td>
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

      {modal && <ProjectModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
