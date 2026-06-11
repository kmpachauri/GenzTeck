import React, { useEffect, useState } from 'react';
import { Save, Cog, RefreshCw } from 'lucide-react';
import { adminAPI } from '../api';
import { showToast } from '../components/Toast';

const emptySettings = {
  logo: '', favicon: '',
  heroTitle: '', heroSubtitle: '',
  whatsapp: '', instagram: '', facebook: '', youtube: '', linkedin: '',
  phone: '', email: '', address: '',
  googleFormUrl: '',
  metaTitle: '', metaDescription: '',
};

function Section({ title, children }) {
  return (
    <div className="card section-gap">
      <div className="card-header">
        <span className="card-title">{title}</span>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default function Settings() {
  const [settings, setSettings] = useState(emptySettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await adminAPI.getSettings();
      setSettings({ ...emptySettings, ...(res.data || {}) });
    } catch {
      showToast('Failed to load settings', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const set = (k, v) => setSettings(s => ({ ...s, [k]: v }));

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await adminAPI.updateSettings(settings);
      showToast('Settings saved successfully!');
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to save settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="loading-spinner" style={{ height: 300 }}><div className="spinner" /> Loading settings...</div>;
  }

  return (
    <form onSubmit={handleSave}>
      <div className="page-header">
        <div>
          <h2 className="page-title">Settings</h2>
          <p className="page-subtitle">Manage site-wide configuration</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="button" className="btn btn-outline btn-sm" onClick={fetch}>
            <RefreshCw size={14} /> Reset
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? <><div className="spinner" style={{width:14,height:14}} /> Saving...</> : <><Save size={15} /> Save Settings</>}
          </button>
        </div>
      </div>

      {/* Branding */}
      <Section title="🎨 Branding">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Logo URL</label>
            <input className="form-input" type="url" value={settings.logo} onChange={e => set('logo', e.target.value)} placeholder="https://..." />
            {settings.logo && (
              <img src={settings.logo} alt="logo" style={{ marginTop: 8, height: 48, objectFit: 'contain' }} />
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Favicon URL</label>
            <input className="form-input" type="url" value={settings.favicon} onChange={e => set('favicon', e.target.value)} placeholder="https://..." />
            {settings.favicon && (
              <img src={settings.favicon} alt="favicon" style={{ marginTop: 8, height: 32, objectFit: 'contain' }} />
            )}
          </div>
        </div>
      </Section>

      {/* Hero Section */}
      <Section title="🦸 Hero Section">
        <div className="form-group">
          <label className="form-label">Hero Title</label>
          <input className="form-input" value={settings.heroTitle} onChange={e => set('heroTitle', e.target.value)} placeholder="We Build Digital Solutions That Drive Results" />
        </div>
        <div className="form-group">
          <label className="form-label">Hero Subtitle</label>
          <textarea className="form-textarea" value={settings.heroSubtitle} onChange={e => set('heroSubtitle', e.target.value)} rows={2} placeholder="From web apps to mobile solutions..." />
        </div>
      </Section>

      {/* Social Media */}
      <Section title="📱 Social Media">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">WhatsApp Number</label>
            <input className="form-input" value={settings.whatsapp} onChange={e => set('whatsapp', e.target.value)} placeholder="+91 99999 99999" />
          </div>
          <div className="form-group">
            <label className="form-label">Instagram URL</label>
            <input className="form-input" type="url" value={settings.instagram} onChange={e => set('instagram', e.target.value)} placeholder="https://instagram.com/..." />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Facebook URL</label>
            <input className="form-input" type="url" value={settings.facebook} onChange={e => set('facebook', e.target.value)} placeholder="https://facebook.com/..." />
          </div>
          <div className="form-group">
            <label className="form-label">YouTube URL</label>
            <input className="form-input" type="url" value={settings.youtube} onChange={e => set('youtube', e.target.value)} placeholder="https://youtube.com/..." />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">LinkedIn URL</label>
          <input className="form-input" type="url" value={settings.linkedin} onChange={e => set('linkedin', e.target.value)} placeholder="https://linkedin.com/company/..." />
        </div>
      </Section>

      {/* Contact Info */}
      <Section title="📞 Contact Information">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input className="form-input" value={settings.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 99999 99999" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" value={settings.email} onChange={e => set('email', e.target.value)} placeholder="hello@genzteck.com" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Address</label>
          <textarea className="form-textarea" value={settings.address} onChange={e => set('address', e.target.value)} rows={2} placeholder="123 Street, City, State, PIN" />
        </div>
      </Section>

      {/* Google Form */}
      <Section title="📋 Lead Form">
        <div className="form-group">
          <label className="form-label">Google Form URL</label>
          <input className="form-input" type="url" value={settings.googleFormUrl} onChange={e => set('googleFormUrl', e.target.value)} placeholder="https://docs.google.com/forms/..." />
          <div className="form-hint">Used as the contact/lead capture form on the main site</div>
        </div>
      </Section>

      {/* SEO */}
      <Section title="🔍 SEO / Meta Tags">
        <div className="form-group">
          <label className="form-label">Meta Title</label>
          <input className="form-input" value={settings.metaTitle} onChange={e => set('metaTitle', e.target.value)} placeholder="GenzTeck - Innovative Tech Solutions" />
          <div className="form-hint">{settings.metaTitle?.length || 0} / 60 characters</div>
        </div>
        <div className="form-group">
          <label className="form-label">Meta Description</label>
          <textarea className="form-textarea" value={settings.metaDescription} onChange={e => set('metaDescription', e.target.value)} rows={3} placeholder="We build custom web and mobile applications..." />
          <div className="form-hint">{settings.metaDescription?.length || 0} / 160 characters</div>
        </div>
      </Section>

      {/* Save Button (bottom) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
        <button type="submit" className="btn btn-primary" disabled={saving} style={{ minWidth: 140, justifyContent: 'center' }}>
          {saving ? <><div className="spinner" style={{width:14,height:14}} /> Saving...</> : <><Save size={15} /> Save Settings</>}
        </button>
      </div>
    </form>
  );
}
