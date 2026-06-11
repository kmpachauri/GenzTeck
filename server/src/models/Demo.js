const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  features: [{ type: String }],
  status: { type: String, enum: ['live', 'coming-soon'], default: 'coming-soon' },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Demo', demoSchema);
