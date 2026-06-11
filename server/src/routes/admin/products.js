const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Product = require('../../models/Product');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ sortOrder: 1 });
    res.json({ success: true, data: products });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const { name, shortDescription, fullDescription, websiteUrl, images, features, useCases, status, isActive, sortOrder } = req.body;
    const slug = slugify(name, { lower: true, strict: true });
    const product = await Product.create({ name, slug, shortDescription, fullDescription, websiteUrl, images, features, useCases, status, isActive, sortOrder });
    res.status(201).json({ success: true, data: product });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, shortDescription, fullDescription, websiteUrl, images, features, useCases, status, isActive, sortOrder } = req.body;
    const update = { shortDescription, fullDescription, websiteUrl, images, features, useCases, status, isActive, sortOrder };
    if (name) { update.name = name; update.slug = slugify(name, { lower: true, strict: true }); }
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
