const express = require('express');
const router = express.Router();
const Lead = require('../../models/Lead');
const { protect } = require('../../middleware/auth');

router.use(protect);

// GET all leads with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const total = await Lead.countDocuments(filter);
    const leads = await Lead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json({ success: true, data: leads, total, page, pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// PUT update status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, data: lead });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// PUT update notes
router.put('/:id/notes', async (req, res) => {
  try {
    const { adminNotes } = req.body;
    const lead = await Lead.findByIdAndUpdate(req.params.id, { adminNotes }, { new: true });
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
    res.json({ success: true, data: lead });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Lead deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
