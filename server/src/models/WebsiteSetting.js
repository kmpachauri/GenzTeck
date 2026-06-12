const mongoose = require('mongoose');

const websiteSettingSchema = new mongoose.Schema({
  logo: { type: String, default: '' },
  favicon: { type: String, default: '' },
  heroTitle: { type: String, default: 'We Build Software That Grows Your Business' },
  heroSubtitle: { type: String, default: 'Custom websites, mobile apps, automation systems, and digital products for modern businesses.' },
  whatsapp: { type: String, default: '+918769592668' },
  instagram: { type: String, default: 'https://www.instagram.com/genzteck_com' },
  facebook: { type: String, default: 'https://www.facebook.com/share/1LpRPBaGaP/' },
  youtube: { type: String, default: 'https://youtube.com/@genzteck' },
  linkedin: { type: String, default: 'https://www.linkedin.com/company/genztecknology/' },
  phone: { type: String, default: '+91 87695 92668' },
  email: { type: String, default: 'info.genzteck@gmail.com' },
  address: { type: String, default: 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020' },
  googleFormUrl: { type: String, default: '' },
  metaTitle: { type: String, default: 'GenzTeck | Software Development & Digital Solutions' },
  metaDescription: { type: String, default: 'GenzTeck builds custom websites, mobile apps, automation systems, and digital products for businesses.' }
}, { timestamps: true });

module.exports = mongoose.model('WebsiteSetting', websiteSettingSchema);
