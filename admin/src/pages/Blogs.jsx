import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, FileText, Check, ExternalLink } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const CATEGORIES = ['technology', 'business', 'startup', 'design', 'development', 'marketing', 'general'];

const emptyForm = {
  title: '', category: 'technology', excerpt: '', content: '', image: '',
  metaTitle: '', metaDescription: '', isPublished: false
};

function BlogModal({ item, onClose, onSaved }) {
  const [form, setForm] = useState(item ? { ...item } : emptyForm);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (item?._id) {
        await adminAPI.updateBlog(item._id, form);
        showToast('Blog updated!');
      } else {
        await adminAPI.createBlog(form);
        showToast('Blog created!');
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
          <h3 className="modal-title">{item ? 'Edit Blog' : 'Add Blog Post'}</h3>
          <button className="modal-close" onClick={onClose}><X size={16} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label required">Title</label>
              <input className="form-input" value={form.title} onChange={e => set('title', e.target.value)} required placeholder="Blog post title" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-select" value={form.category} onChange={e => set('category', e.target.value)}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Cover Image URL</label>
                <input className="form-input" type="url" value={form.image} onChange={e => set('image', e.target.value)} placeholder="https://..." />
              </div>
            </div>
            {form.image && (
              <div style={{ marginBottom: 16 }}>
                <img src={form.image} alt="cover" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Excerpt</label>
              <textarea className="form-textarea" value={form.excerpt} onChange={e => set('excerpt', e.target.value)} rows={2} placeholder="Short summary of the blog post" />
            </div>
            <div className="form-group">
              <label className="form-label required">Content</label>
              <textarea className="form-textarea" value={form.content} onChange={e => set('content', e.target.value)} rows={8} required placeholder="Write your blog content here (HTML or Markdown)..." />
            </div>
            <div className="divider" />
            <div style={{ fontSize: 13, fontWeight: 600, color: '#64748B', marginBottom: 12 }}>SEO Meta</div>
            <div className="form-group">
              <label className="form-label">Meta Title</label>
              <input className="form-input" value={form.metaTitle} onChange={e => set('metaTitle', e.target.value)} placeholder="SEO title (defaults to blog title)" />
            </div>
            <div className="form-group">
              <label className="form-label">Meta Description</label>
              <textarea className="form-textarea" value={form.metaDescription} onChange={e => set('metaDescription', e.target.value)} rows={2} placeholder="SEO description (150-160 chars)" />
              <div className="form-hint">{form.metaDescription?.length || 0} / 160 characters</div>
            </div>
            <div className="toggle-group">
              <label className="toggle-switch">
                <input type="checkbox" checked={form.isPublished} onChange={e => set('isPublished', e.target.checked)} />
                <span className="toggle-slider" />
              </label>
              <span className="toggle-label">Published</span>
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
        <div className="confirm-title">Delete Blog Post</div>
        <div className="confirm-desc">Delete <strong>"{name}"</strong>? This cannot be undone.</div>
        <div className="confirm-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getBlogs();
      const arr = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setBlogs(arr);
    } catch {
      showToast('Failed to load blogs', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async () => {
    try {
      await adminAPI.deleteBlog(deleteTarget._id);
      showToast('Blog deleted');
      setDeleteTarget(null);
      fetch();
    } catch {
      showToast('Failed to delete', 'error');
    }
  };

  const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">Blogs</h2>
          <p className="page-subtitle">Manage your blog posts and articles</p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal('add')}><Plus size={15} /> Add Post</button>
      </div>

      <div className="card">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner"><div className="spinner" /> Loading...</div>
          ) : blogs.length === 0 ? (
            <div className="empty-state"><FileText size={36} /><p>No blog posts yet.</p></div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map(blog => (
                  <tr key={blog._id}>
                    <td>
                      {blog.image
                        ? <img src={blog.image} alt="cover" style={{ width: 60, height: 38, objectFit: 'cover', borderRadius: 4 }} />
                        : <div style={{ width: 60, height: 38, background: '#E2E8F0', borderRadius: 4, display:'flex',alignItems:'center',justifyContent:'center' }}>
                            <FileText size={14} color="#94A3B8" />
                          </div>
                      }
                    </td>
                    <td style={{ fontWeight: 600 }}>
                      <div className="truncate" style={{ maxWidth: 260 }}>{blog.title}</div>
                    </td>
                    <td><span className="badge badge-primary">{blog.category}</span></td>
                    <td>
                      <span className={`badge ${blog.isPublished ? 'badge-success' : 'badge-warning'}`}>
                        {blog.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="text-muted text-small">{formatDate(blog.createdAt || blog.publishedAt)}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setModal(blog)}><Pencil size={14} /></button>
                        <button className="btn btn-ghost btn-icon btn-sm" onClick={() => setDeleteTarget(blog)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
                        {blog.slug && (
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-icon btn-sm"
                            title="View"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && <BlogModal item={modal === 'add' ? null : modal} onClose={() => setModal(null)} onSaved={() => { setModal(null); fetch(); }} />}
      {deleteTarget && <ConfirmDelete name={deleteTarget.title} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />}
    </div>
  );
}
