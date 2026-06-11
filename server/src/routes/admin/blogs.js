const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Blog = require('../../models/Blog');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().select('-content').sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const { title, category, excerpt, content, image, metaTitle, metaDescription, isPublished } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    const blog = await Blog.create({ title, slug, category, excerpt, content, image, metaTitle, metaDescription, isPublished });
    res.status(201).json({ success: true, data: blog });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, category, excerpt, content, image, metaTitle, metaDescription, isPublished } = req.body;
    const update = { category, excerpt, content, image, metaTitle, metaDescription, isPublished };
    if (title) { update.title = title; update.slug = slugify(title, { lower: true, strict: true }); }
    const blog = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Blog deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
