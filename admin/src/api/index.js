import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
});

// Add JWT token to all admin requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('gt_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Handle 401
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('gt_admin_token');
      localStorage.removeItem('gt_admin_user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(err);
  }
);

export const adminAPI = {
  // Auth
  login: (data) => api.post('/admin/auth/login', data),
  me: () => api.get('/admin/auth/me'),

  // Services
  getServices: () => api.get('/admin/services'),
  createService: (data) => api.post('/admin/services', data),
  updateService: (id, data) => api.put(`/admin/services/${id}`, data),
  deleteService: (id) => api.delete(`/admin/services/${id}`),

  // Products
  getProducts: () => api.get('/admin/products'),
  createProduct: (data) => api.post('/admin/products', data),
  updateProduct: (id, data) => api.put(`/admin/products/${id}`, data),
  deleteProduct: (id) => api.delete(`/admin/products/${id}`),

  // Projects
  getProjects: () => api.get('/admin/projects'),
  createProject: (data) => api.post('/admin/projects', data),
  updateProject: (id, data) => api.put(`/admin/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/admin/projects/${id}`),

  // Demos
  getDemos: () => api.get('/admin/demos'),
  createDemo: (data) => api.post('/admin/demos', data),
  updateDemo: (id, data) => api.put(`/admin/demos/${id}`, data),
  deleteDemo: (id) => api.delete(`/admin/demos/${id}`),

  // Demo Videos
  getDemoVideos: () => api.get('/admin/demo-videos'),
  createDemoVideo: (data) => api.post('/admin/demo-videos', data),
  updateDemoVideo: (id, data) => api.put(`/admin/demo-videos/${id}`, data),
  deleteDemoVideo: (id) => api.delete(`/admin/demo-videos/${id}`),

  // Testimonials
  getTestimonials: () => api.get('/admin/testimonials'),
  createTestimonial: (data) => api.post('/admin/testimonials', data),
  updateTestimonial: (id, data) => api.put(`/admin/testimonials/${id}`, data),
  deleteTestimonial: (id) => api.delete(`/admin/testimonials/${id}`),

  // Leads
  getLeads: (params) => api.get('/admin/leads', { params }),
  updateLeadStatus: (id, status) => api.put(`/admin/leads/${id}/status`, { status }),
  updateLeadNotes: (id, adminNotes) => api.put(`/admin/leads/${id}/notes`, { adminNotes }),
  deleteLead: (id) => api.delete(`/admin/leads/${id}`),

  // Demo Requests
  getDemoRequests: (params) => api.get('/admin/demo-requests', { params }),
  updateDemoRequestStatus: (id, status) => api.put(`/admin/demo-requests/${id}/status`, { status }),
  updateDemoRequestNotes: (id, adminNotes) => api.put(`/admin/demo-requests/${id}/notes`, { adminNotes }),
  deleteDemoRequest: (id) => api.delete(`/admin/demo-requests/${id}`),

  // Blogs
  getBlogs: () => api.get('/admin/blogs'),
  getBlog: (id) => api.get(`/admin/blogs/${id}`),
  createBlog: (data) => api.post('/admin/blogs', data),
  updateBlog: (id, data) => api.put(`/admin/blogs/${id}`, data),
  deleteBlog: (id) => api.delete(`/admin/blogs/${id}`),

  // Settings
  getSettings: () => api.get('/admin/settings'),
  updateSettings: (data) => api.put('/admin/settings', data),

  // Upload
  uploadFile: (formData) => api.post('/admin/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
};

export default api;
