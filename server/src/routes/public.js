const express = require('express');
const router = express.Router();

const Service = require('../models/Service');
const Product = require('../models/Product');
const Project = require('../models/Project');
const Demo = require('../models/Demo');
const DemoVideo = require('../models/DemoVideo');
const Testimonial = require('../models/Testimonial');
const Blog = require('../models/Blog');
const Lead = require('../models/Lead');
const DemoRequest = require('../models/DemoRequest');
const WebsiteSetting = require('../models/WebsiteSetting');


// GET /api/public/settings
router.get('/settings', async (req, res) => {
  try {
    let settings = await WebsiteSetting.findOne();
    if (!settings) {
      settings = await WebsiteSetting.create({});
    }
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, data: services });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({ isActive: true }).sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({ isActive: true }).sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/demos
router.get('/demos', async (req, res) => {
  try {
    const demos = await Demo.find({ isActive: true }).sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, data: demos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/demo-videos
router.get('/demo-videos', async (req, res) => {
  try {
    const videos = await DemoVideo.find({ isActive: true }).sort({ sortOrder: 1, category: 1 });
    res.json({ success: true, data: videos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/testimonials
router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({ sortOrder: 1 });
    res.json({ success: true, data: testimonials });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true })
      .select('-content')
      .sort({ publishedAt: -1, createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/public/blogs/:slug
router.get('/blogs/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/public/leads
router.post('/leads', async (req, res) => {
  try {
    const { name, phone, email, businessName, serviceRequired, budgetRange, timeline, projectDetails, preferredContactMethod } = req.body;
    if (!name || !phone || !email) {
      return res.status(400).json({ success: false, message: 'Name, phone, and email are required' });
    }
    const lead = await Lead.create({ name, phone, email, businessName, serviceRequired, budgetRange, timeline, projectDetails, preferredContactMethod });
    res.status(201).json({ success: true, message: 'Your message has been sent! We will contact you soon.', data: { id: lead._id } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/public/demo-requests
router.post('/demo-requests', async (req, res) => {
  try {
    const { name, phone, email, businessType, demoInterestedIn, message } = req.body;
    if (!name || !phone || !email) {
      return res.status(400).json({ success: false, message: 'Name, phone, and email are required' });
    }
    const request = await DemoRequest.create({ name, phone, email, businessType, demoInterestedIn, message });
    res.status(201).json({ success: true, message: 'Demo request submitted! We will reach out to schedule.', data: { id: request._id } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
