const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  businessName: { type: String, default: '' },
  serviceRequired: { type: String, default: '' },
  budgetRange: { type: String, default: '' },
  timeline: { type: String, default: '' },
  projectDetails: { type: String, default: '' },
  preferredContactMethod: { type: String, enum: ['phone', 'email', 'whatsapp'], default: 'email' },
  source: { type: String, default: 'website' },
  status: { type: String, enum: ['new', 'contacted', 'converted', 'rejected'], default: 'new' },
  adminNotes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
