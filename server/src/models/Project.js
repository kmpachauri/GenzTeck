const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  url: { type: String, default: '' },
  type: { type: String, required: true },
  image: { type: String, default: '' },
  problem: { type: String, default: '' },
  solution: { type: String, default: '' },
  features: [{ type: String }],
  techStack: [{ type: String }],
  result: { type: String, default: '' },
  status: { type: String, enum: ['live', 'in-progress', 'completed'], default: 'live' },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
