const express = require('express');
const router = express.Router();
const DemoVideo = require('../../models/DemoVideo');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    const videos = await DemoVideo.find().sort({ sortOrder: 1 });
    res.json({ success: true, data: videos });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const video = await DemoVideo.create(req.body);
    res.status(201).json({ success: true, data: video });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const video = await DemoVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(404).json({ success: false, message: 'Video not found' });
    res.json({ success: true, data: video });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await DemoVideo.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Video deleted' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
