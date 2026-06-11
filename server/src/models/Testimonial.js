const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  businessName: { type: String, default: '' },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  type: { type: String, enum: ['text', 'video', 'photo'], default: 'text' },
  reviewText: { type: String, default: '' },
  image: { type: String, default: '' },
  videoUrl: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
