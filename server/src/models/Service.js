const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, default: '' },
  icon: { type: String, default: '' },
  image: { type: String, default: '' },
  features: [{ type: String }],
  idealFor: [{ type: String }],
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
