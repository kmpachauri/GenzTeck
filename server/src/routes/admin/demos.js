const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Demo = require('../../models/Demo');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const demos = await Demo.find().sort({ sortOrder: 1 });
    res.json({ success: true, data: demos });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, image, features, status, isActive, sortOrder } = req.body;
    const slug = slugify(title, { lower: true, strict: true });
    const demo = await Demo.create({ title, slug, description, image, features, status, isActive, sortOrder });
    res.status(201).json({ success: true, data: demo });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, description, image, features, status, isActive, sortOrder } = req.body;
    const update = { description, image, features, status, isActive, sortOrder };
    if (title) { update.title = title; update.slug = slugify(title, { lower: true, strict: true }); }
    const demo = await Demo.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!demo) return res.status(404).json({ success: false, message: 'Demo not found' });
    res.json({ success: true, data: demo });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await Demo.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Demo deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
