import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// Public API
export const publicAPI = {
  getSettings: () => api.get('/public/settings'),
  getServices: () => api.get('/public/services'),
  getProducts: () => api.get('/public/products'),
  getProjects: () => api.get('/public/projects'),
  getDemos: () => api.get('/public/demos'),
  getDemoVideos: () => api.get('/public/demo-videos'),
  getTestimonials: () => api.get('/public/testimonials'),
  getBlogs: () => api.get('/public/blogs'),
  getBlog: (slug) => api.get(`/public/blogs/${slug}`),
  submitLead: (data) => api.post('/public/leads', data),
  submitDemoRequest: (data) => api.post('/public/demo-requests', data),
};

export default api;
