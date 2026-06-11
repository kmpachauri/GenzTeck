const mongoose = require('mongoose');

const demoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  businessType: { type: String, default: '' },
  demoInterestedIn: { type: String, default: '' },
  message: { type: String, default: '' },
  status: { type: String, enum: ['new', 'contacted', 'scheduled', 'completed', 'rejected'], default: 'new' },
  adminNotes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('DemoRequest', demoRequestSchema);
