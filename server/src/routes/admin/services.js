const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Service = require('../../models/Service');
const { protect } = require('../../middleware/auth');

router.use(protect);

// GET all
router.get('/', async (req, res) => {
  try {
    const services = await Service.find().sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, data: services });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// POST create
router.post('/', async (req, res) => {
  try {
    const { title, shortDescription, fullDescription, icon, image, features, idealFor, isActive, sortOrder } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    const service = await Service.create({ title, slug, shortDescription, fullDescription, icon, image, features, idealFor, isActive, sortOrder });
    res.status(201).json({ success: true, data: service });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const { title, shortDescription, fullDescription, icon, image, features, idealFor, isActive, sortOrder } = req.body;
    const update = { shortDescription, fullDescription, icon, image, features, idealFor, isActive, sortOrder };
    if (title) { update.title = title; update.slug = slugify(title, { lower: true, strict: true }); }
    const service = await Service.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, message: 'Service deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
