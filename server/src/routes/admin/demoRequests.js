const express = require('express');
const router = express.Router();
const DemoRequest = require('../../models/DemoRequest');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const total = await DemoRequest.countDocuments(filter);
    const requests = await DemoRequest.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json({ success: true, data: requests, total, page, pages: Math.ceil(total / limit) });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id/status', async (req, res) => {
  try {
    const req2 = await DemoRequest.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!req2) return res.status(404).json({ success: false, message: 'Demo request not found' });
    res.json({ success: true, data: req2 });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id/notes', async (req, res) => {
  try {
    const req2 = await DemoRequest.findByIdAndUpdate(req.params.id, { adminNotes: req.body.adminNotes }, { new: true });
    if (!req2) return res.status(404).json({ success: false, message: 'Demo request not found' });
    res.json({ success: true, data: req2 });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await DemoRequest.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Demo request deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
