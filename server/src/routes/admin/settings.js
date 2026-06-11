const express = require('express');
const router = express.Router();
const WebsiteSetting = require('../../models/WebsiteSetting');
const { protect } = require('../../middleware/auth');

router.use(protect);

router.get('/', async (req, res) => {
  try {
    let settings = await WebsiteSetting.findOne();
    if (!settings) settings = await WebsiteSetting.create({});
    res.json({ success: true, data: settings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.put('/', async (req, res) => {
  try {
    let settings = await WebsiteSetting.findOne();
    if (!settings) {
      settings = await WebsiteSetting.create(req.body);
    } else {
      Object.assign(settings, req.body);
      await settings.save();
    }
    res.json({ success: true, data: settings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

module.exports = router;
