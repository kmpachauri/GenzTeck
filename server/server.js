const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// CORS
const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URL,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'uploads'), {
  setHeaders: (res) => {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  }
}));

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 30,
  message: { success: false, message: 'Too many submissions, please try again later.' }
});

// Routes
const publicRoutes = require('./src/routes/public');
const adminAuthRoutes = require('./src/routes/admin/auth');
const adminServicesRoutes = require('./src/routes/admin/services');
const adminProductsRoutes = require('./src/routes/admin/products');
const adminProjectsRoutes = require('./src/routes/admin/projects');
const adminDemosRoutes = require('./src/routes/admin/demos');
const adminDemoVideosRoutes = require('./src/routes/admin/demoVideos');
const adminTestimonialsRoutes = require('./src/routes/admin/testimonials');
const adminLeadsRoutes = require('./src/routes/admin/leads');
const adminDemoRequestsRoutes = require('./src/routes/admin/demoRequests');
const adminBlogsRoutes = require('./src/routes/admin/blogs');
const adminSettingsRoutes = require('./src/routes/admin/settings');
const adminUploadRoutes = require('./src/routes/admin/upload');

app.use('/api/public', formLimiter, publicRoutes);
app.use('/api/admin/auth', authLimiter, adminAuthRoutes);
app.use('/api/admin/services', adminServicesRoutes);
app.use('/api/admin/products', adminProductsRoutes);
app.use('/api/admin/projects', adminProjectsRoutes);
app.use('/api/admin/demos', adminDemosRoutes);
app.use('/api/admin/demo-videos', adminDemoVideosRoutes);
app.use('/api/admin/testimonials', adminTestimonialsRoutes);
app.use('/api/admin/leads', adminLeadsRoutes);
app.use('/api/admin/demo-requests', adminDemoRequestsRoutes);
app.use('/api/admin/blogs', adminBlogsRoutes);
app.use('/api/admin/settings', adminSettingsRoutes);
app.use('/api/admin/upload', adminUploadRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'GenzTeck API is running', timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 GenzTeck server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });

module.exports = app;
