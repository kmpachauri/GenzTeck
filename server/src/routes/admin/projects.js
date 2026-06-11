const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Project = require('../../models/Project');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ sortOrder: 1 });
    res.json({ success: true, data: projects });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const { title, url, type, image, problem, solution, features, techStack, result, status, isActive, sortOrder } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    const project = await Project.create({ title, slug, url, type, image, problem, solution, features, techStack, result, status, isActive, sortOrder });
    res.status(201).json({ success: true, data: project });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, url, type, image, problem, solution, features, techStack, result, status, isActive, sortOrder } = req.body;
    const update = { url, type, image, problem, solution, features, techStack, result, status, isActive, sortOrder };
    if (title) { update.title = title; update.slug = slugify(title, { lower: true, strict: true }); }
    const project = await Project.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, data: project });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    res.json({ success: true, message: 'Project deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
