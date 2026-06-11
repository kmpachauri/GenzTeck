const mongoose = require('mongoose');

const demoVideoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: ['Admin Panels', 'Mobile Apps', 'Restaurant Systems', 'GeoTrace', 'OneTap', 'Automation Systems'],
    required: true
  },
  description: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  videoUrl: { type: String, default: '' },
  status: { type: String, enum: ['live', 'coming-soon'], default: 'coming-soon' },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('DemoVideo', demoVideoSchema);
