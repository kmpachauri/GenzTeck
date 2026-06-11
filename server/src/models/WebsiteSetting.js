const mongoose = require('mongoose');

const websiteSettingSchema = new mongoose.Schema({
  logo: { type: String, default: '' },
  favicon: { type: String, default: '' },
  heroTitle: { type: String, default: 'We Build Software That Grows Your Business' },
  heroSubtitle: { type: String, default: 'Custom websites, mobile apps, automation systems, and digital products for modern businesses.' },
  whatsapp: { type: String, default: '+919999999999' },
  instagram: { type: String, default: 'https://instagram.com/genzteck' },
  facebook: { type: String, default: 'https://facebook.com/genzteck' },
  youtube: { type: String, default: 'https://youtube.com/@genzteck' },
  linkedin: { type: String, default: 'https://linkedin.com/company/genzteck' },
  phone: { type: String, default: '+91 99999 99999' },
  email: { type: String, default: 'hello@genzteck.com' },
  address: { type: String, default: 'India' },
  googleFormUrl: { type: String, default: '' },
  metaTitle: { type: String, default: 'GenzTeck | Software Development & Digital Solutions' },
  metaDescription: { type: String, default: 'GenzTeck builds custom websites, mobile apps, automation systems, and digital products for businesses.' }
}, { timestamps: true });

module.exports = mongoose.model('WebsiteSetting', websiteSettingSchema);
