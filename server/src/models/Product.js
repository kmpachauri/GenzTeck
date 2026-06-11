const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, default: '' },
  websiteUrl: { type: String, default: '' },
  images: [{ type: String }],
  features: [{ type: String }],
  useCases: [{ type: String }],
  status: { type: String, enum: ['live', 'coming-soon', 'beta'], default: 'live' },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
