const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const AdminUser = require('../models/AdminUser');
const Service = require('../models/Service');
const Product = require('../models/Product');
const Project = require('../models/Project');
const Demo = require('../models/Demo');
const DemoVideo = require('../models/DemoVideo');
const Testimonial = require('../models/Testimonial');
const Blog = require('../models/Blog');
const WebsiteSetting = require('../models/WebsiteSetting');

const slugify = require('slugify');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Clear all collections
    await Promise.all([
      AdminUser.deleteMany({}),
      Service.deleteMany({}),
      Product.deleteMany({}),
      Project.deleteMany({}),
      Demo.deleteMany({}),
      DemoVideo.deleteMany({}),
      Testimonial.deleteMany({}),
      Blog.deleteMany({}),
      WebsiteSetting.deleteMany({})
    ]);
    console.log('🗑️  Collections cleared');

    // Admin User
    const passwordHash = await bcrypt.hash('Admin@12345', 12);
    await AdminUser.create({
      name: 'GenzTeck Admin',
      email: 'admin@genzteck.com',
      passwordHash,
      role: 'superadmin'
    });
    console.log('👤 Admin user created: admin@genzteck.com / Admin@12345');

    // Website Settings
    await WebsiteSetting.create({
      heroTitle: 'We Build Software That Grows Your Business',
      heroSubtitle: 'Custom websites, mobile apps, automation systems & digital products for modern businesses.',
      whatsapp: '+918769592668',
      instagram: 'https://www.instagram.com/genzteck_com',
      facebook: 'https://www.facebook.com/share/1LpRPBaGaP/',
      youtube: 'https://youtube.com/@genzteck',
      linkedin: 'https://www.linkedin.com/company/genztecknology/',
      phone: '+91 87695 92668',
      email: 'info.genzteck@gmail.com',
      address: 'B-54, Shri Shyam Residency, Dadudayal Nagar, Mansarovar, Jaipur (Rajasthan) - 302020',
      metaTitle: 'GenzTeck | Software Development & Digital Solutions',
      metaDescription: 'GenzTeck builds custom websites, mobile apps, automation systems, and digital products for businesses across India.'
    });
    console.log('⚙️  Website settings created');

    // Services
    const servicesData = [
      { title: 'Website Development', shortDescription: 'Custom, fast, and beautiful websites built to convert visitors into customers.', features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration', 'Analytics Setup'], idealFor: ['Businesses wanting online presence', 'Startups needing a launch site', 'Companies upgrading old websites'], icon: '🌐', sortOrder: 1 },
      { title: 'Mobile App Development', shortDescription: 'Native and cross-platform mobile apps for Android and iOS that users love.', features: ['Android & iOS', 'Cross-Platform', 'Offline Support', 'Push Notifications', 'App Store Deployment'], idealFor: ['Businesses needing mobile reach', 'Service providers', 'E-commerce brands'], icon: '📱', sortOrder: 2 },
      { title: 'Custom Software Development', shortDescription: 'Bespoke software solutions tailored to your unique business processes.', features: ['Custom Architecture', 'Scalable', 'API Integration', 'Cloud Deployment', 'Ongoing Support'], idealFor: ['Enterprises with unique workflows', 'SaaS startups', 'Operational businesses'], icon: '⚙️', sortOrder: 3 },
      { title: 'Landing Page Development', shortDescription: 'High-converting landing pages designed to capture leads and drive sales.', features: ['Conversion Optimized', 'A/B Testing Ready', 'Lead Capture Forms', 'Fast Load Times', 'Analytics Integration'], idealFor: ['Marketing campaigns', 'Product launches', 'Lead generation'], icon: '🚀', sortOrder: 4 },
      { title: 'Admin Panel Development', shortDescription: 'Clean, powerful admin panels to manage your business data and operations.', features: ['Role-Based Access', 'Data Management', 'Analytics Dashboard', 'File Uploads', 'Export Data'], idealFor: ['SaaS products', 'E-commerce businesses', 'Any digital platform'], icon: '🖥️', sortOrder: 5 },
      { title: 'Paid Meta Ads', shortDescription: 'Strategic Facebook and Instagram ad campaigns that deliver measurable ROI.', features: ['Audience Research', 'Ad Creatives', 'Campaign Management', 'A/B Testing', 'ROI Reporting'], idealFor: ['E-commerce stores', 'Local businesses', 'Service providers'], icon: '📣', sortOrder: 6 },
      { title: 'Google Business Profile Setup', shortDescription: 'Get found on Google Maps and local search with a fully optimized GBP.', features: ['Profile Optimization', 'Photo Setup', 'Review Management', 'Post Scheduling', 'Insights Tracking'], idealFor: ['Local businesses', 'Restaurants', 'Service providers'], icon: '🗺️', sortOrder: 7 },
      { title: 'QR/NFC Based Systems', shortDescription: 'Smart QR and NFC solutions for menus, payments, reviews, and more.', features: ['Digital Menus', 'Contactless Payments', 'Review Collection', 'Smart Standees', 'Analytics'], idealFor: ['Restaurants', 'Hotels', 'Retail stores'], icon: '📲', sortOrder: 8 },
      { title: 'Automation Systems', shortDescription: 'Automate repetitive tasks and workflows to save time and reduce errors.', features: ['Process Automation', 'API Integrations', 'Scheduled Tasks', 'Notifications', 'Reporting'], idealFor: ['Operations teams', 'E-commerce', 'Any business with repetitive tasks'], icon: '🤖', sortOrder: 9 },
      { title: 'UI/UX Design', shortDescription: 'Beautiful, intuitive designs that delight users and drive engagement.', features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Handoff to Dev'], idealFor: ['Product companies', 'App startups', 'Redesign projects'], icon: '🎨', sortOrder: 10 }
    ];

    for (const s of servicesData) {
      await Service.create({ ...s, slug: slugify(s.title, { lower: true, strict: true }), fullDescription: s.shortDescription });
    }
    console.log('🛠️  Services created (10)');

    // Products
    const productsData = [
      {
        name: 'QR & NFC Digital Menu + Order Management System',
        slug: 'qr-nfc-digital-menu-order-management',
        shortDescription: 'Complete restaurant digitalization — from QR menus to kitchen management, all in one system.',
        websiteUrl: '',
        features: ['QR/NFC Digital Menu', 'Customer Order Page', 'Admin Panel', 'Waiter Panel', 'Kitchen Display Panel', 'Live Order Status', 'Table & Order Management', 'Billing Flow', 'White-Label Branding'],
        useCases: ['Restaurants', 'Cafes', 'Hotels', 'Cloud Kitchens'],
        status: 'live', sortOrder: 1
      },
      {
        name: 'GeoTrace',
        slug: 'geotrace',
        shortDescription: 'Real-time GPS fleet tracking system with geofencing, alerts, and comprehensive fleet analytics.',
        websiteUrl: '',
        features: ['Live GPS Tracking', 'Geofencing Alerts', 'Engine On/Off Monitoring', 'Temperature Monitoring', 'Fuel Monitoring', 'AC Monitoring', 'Route History', 'Custom Alerts', 'Reports & Analytics', 'Fleet Dashboard'],
        useCases: ['Logistics Companies', 'Fleet Operators', 'School Buses', 'Delivery Services'],
        status: 'live', sortOrder: 2
      },
      {
        name: 'NFC / QR Smart Standee',
        slug: 'nfc-qr-smart-standee',
        shortDescription: 'One tap to connect your customers to Instagram, Google Reviews, WhatsApp, menus, and more.',
        websiteUrl: '',
        features: ['Instagram Link', 'Google Review Link', 'WhatsApp Link', 'Landing Page Link', 'Menu Link', 'Payment Link', 'Any Business Link', 'No App Required', 'Instant Connection'],
        useCases: ['Restaurants', 'Salons', 'Retail Stores', 'Any Business'],
        status: 'live', sortOrder: 3
      },
      {
        name: 'OneTap',
        slug: 'onetap',
        shortDescription: 'Create a stunning smart landing page in minutes with 30+ themes. Your business, one link away.',
        websiteUrl: 'https://onetap.genzteck.com/',
        features: ['One-Page Smart Landing Page', 'Admin Panel', '30+ Premium Themes', 'Social Links', 'WhatsApp Button', 'Instagram Link', 'Facebook Link', 'Google Review Link', 'Website Links', 'QR/NFC Connection', 'Lifetime Free Hosting'],
        useCases: ['Small Businesses', 'Freelancers', 'Creators', 'Any Professional'],
        status: 'live', sortOrder: 4
      }
    ];

    for (const p of productsData) {
      await Product.create(p);
    }
    console.log('📦 Products created (4)');

    // Projects
    const projectsData = [
      {
        title: 'Prakrit Astro',
        slug: 'prakrit-astro',
        url: 'https://prakritastro.com',
        type: 'Astrology / Landing Page Platform',
        problem: 'The client needed a professional online presence to showcase astrology services and attract new clients digitally.',
        solution: 'Built a premium astrology landing page with service listings, testimonials, booking integration, and WhatsApp CTAs.',
        features: ['Service showcase', 'Testimonials section', 'WhatsApp booking', 'Mobile responsive', 'SEO optimized'],
        techStack: ['React', 'Node.js', 'MongoDB'],
        status: 'live', isActive: true, sortOrder: 1
      },
      {
        title: 'Axora Homes',
        slug: 'axora-homes',
        url: 'https://axora.homes',
        type: 'Real Estate Website',
        problem: 'A real estate firm needed a modern website to showcase properties and generate qualified leads.',
        solution: 'Designed and built a premium real estate website with property listings, virtual tours, and lead capture system.',
        features: ['Property listings', 'Lead capture forms', 'Virtual tour integration', 'Agent profiles', 'Advanced search'],
        techStack: ['React', 'Node.js', 'MongoDB'],
        status: 'live', isActive: true, sortOrder: 2
      },
      {
        title: 'Zaira Restaurant',
        slug: 'zaira-restaurant',
        url: 'https://zairarestaurant.com',
        type: 'Restaurant Website',
        problem: 'The restaurant needed a digital presence that reflects their premium brand and drives reservations.',
        solution: 'Created a visually stunning restaurant website with menu showcase, reservations, gallery, and online ordering.',
        features: ['Digital menu', 'Reservation system', 'Photo gallery', 'About section', 'Contact integration'],
        techStack: ['React', 'Node.js', 'MongoDB'],
        status: 'live', isActive: true, sortOrder: 3
      },
      {
        title: 'Zaira Online Ordering',
        slug: 'zaira-online-ordering',
        url: 'https://zairarestaurant.com/order/order.html',
        type: 'Online Restaurant Ordering System',
        problem: 'The restaurant wanted to enable direct online ordering to reduce commission costs from delivery platforms.',
        solution: 'Built a custom online ordering system with cart management, order tracking, and WhatsApp confirmation.',
        features: ['Category-based menu', 'Cart system', 'Order tracking', 'WhatsApp order confirmation', 'Admin order management'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        status: 'live', isActive: true, sortOrder: 4
      }
    ];

    for (const p of projectsData) {
      await Project.create(p);
    }
    console.log('🏗️  Projects created (4)');

    // Demos
    const demosData = [
      { title: 'Astro Website Landing Page With Admin Panel', description: 'A complete astrology business website with integrated admin panel for managing services and content.', features: ['Landing page', 'Admin panel', 'Service management', 'Lead capture'], status: 'coming-soon', sortOrder: 1 },
      { title: 'Bakery E-commerce System', description: 'Full e-commerce system for bakeries with product catalog, cart, and order management.', features: ['Product catalog', 'Shopping cart', 'Order management', 'Admin panel'], status: 'coming-soon', sortOrder: 2 },
      { title: 'Reminder System', description: 'Smart reminder and notification system for businesses to follow up with clients automatically.', features: ['Scheduled reminders', 'WhatsApp notifications', 'Email alerts', 'Dashboard'], status: 'coming-soon', sortOrder: 3 },
      { title: 'CRM Demo', description: 'Customer Relationship Management system to track leads, clients, and follow-ups.', features: ['Lead management', 'Client profiles', 'Follow-up tracking', 'Reports'], status: 'coming-soon', sortOrder: 4 },
      { title: 'Booking System Demo', description: 'Online appointment booking system with calendar management and client notifications.', features: ['Calendar booking', 'SMS/Email confirmations', 'Admin calendar', 'Client management'], status: 'coming-soon', sortOrder: 5 },
      { title: 'Restaurant Ordering Demo', description: 'Complete restaurant ordering system with QR menu, waiter app, and kitchen display.', features: ['QR menu', 'Table ordering', 'Kitchen display', 'Bill management'], status: 'coming-soon', sortOrder: 6 }
    ];

    for (const d of demosData) {
      await Demo.create({ ...d, slug: slugify(d.title, { lower: true, strict: true }) });
    }
    console.log('🎯 Demos created (6)');

    // Demo Videos
    const videosData = [
      { title: 'Restaurant Ordering System Demo', category: 'Restaurant Systems', description: 'Full walkthrough of our QR-based restaurant ordering system.', status: 'coming-soon', sortOrder: 1 },
      { title: 'Admin Panel Walkthrough', category: 'Admin Panels', description: 'See how our custom admin panels work for content management.', status: 'coming-soon', sortOrder: 2 },
      { title: 'OneTap Smart Page Demo', category: 'OneTap', description: 'Create your OneTap smart landing page in under 5 minutes.', status: 'coming-soon', sortOrder: 3 },
      { title: 'GeoTrace Fleet Tracking Demo', category: 'GeoTrace', description: 'Live GPS tracking and fleet management in action.', status: 'coming-soon', sortOrder: 4 },
      { title: 'Landing Page System Demo', category: 'Admin Panels', description: 'Building and managing landing pages with our custom system.', status: 'coming-soon', sortOrder: 5 },
      { title: 'Mobile App Demo', category: 'Mobile Apps', description: 'Cross-platform mobile app showcase built with GenzTeck.', status: 'coming-soon', sortOrder: 6 }
    ];

    for (const v of videosData) {
      await DemoVideo.create(v);
    }
    console.log('🎬 Demo videos created (6)');

    // Testimonials
    const testimonialsData = [
      { name: 'Rahul Sharma', businessName: 'Prakrit Astro', rating: 5, type: 'text', reviewText: 'GenzTeck built our website in just 2 weeks and it looks absolutely stunning. Our online inquiries have tripled since launch!', sortOrder: 1 },
      { name: 'Priya Patel', businessName: 'Axora Homes', rating: 5, type: 'text', reviewText: 'The real estate website they built for us is exactly what we envisioned. Clean, professional, and it converts visitors perfectly.', sortOrder: 2 },
      { name: 'Chef Meera', businessName: 'Zaira Restaurant', rating: 5, type: 'text', reviewText: 'Our online ordering system has been a game changer. Customers love the QR menu and we save thousands in delivery app commissions.', sortOrder: 3 },
      { name: 'Vikram Singh', businessName: 'Startup Founder', rating: 5, type: 'text', reviewText: 'The admin panel and CRM they built for us saved us 10+ hours a week. Professional team, excellent communication throughout.', sortOrder: 4 },
      { name: 'Ananya Gupta', businessName: 'Fitness Studio', rating: 5, type: 'text', reviewText: 'Our booking system is flawless. Clients can book appointments 24/7 and we get WhatsApp notifications instantly. Highly recommended!', sortOrder: 5 }
    ];

    for (const t of testimonialsData) {
      await Testimonial.create(t);
    }
    console.log('⭐ Testimonials created (5)');

    // Blogs
    const blogsData = [
      {
        title: 'Why Every Business Needs A Custom Website',
        category: 'Web Development',
        excerpt: 'A custom website is your most powerful sales tool. Here\'s why template sites are holding your business back.',
        content: '<h2>The Problem with Template Websites</h2><p>In today\'s digital-first world, your website is often the first impression potential customers have of your business. Template websites from Wix, Squarespace, or similar platforms might seem cost-effective initially, but they come with serious limitations that can hurt your business growth.</p><h2>Why Custom Websites Win</h2><p>Custom websites are built specifically for your business needs, your target audience, and your goals. They load faster, rank better on Google, and convert visitors into customers more effectively.</p><h2>The GenzTeck Approach</h2><p>At GenzTeck, we build every website from scratch, optimized for performance, SEO, and conversions. Our websites don\'t just look great — they work hard for your business 24/7.</p>',
        isPublished: true, sortOrder: 1
      },
      {
        title: 'Website vs App: What Should Your Business Build First?',
        category: 'Strategy',
        excerpt: 'The age-old question for growing businesses. We break down the factors that should guide your decision.',
        content: '<h2>Start with a Website</h2><p>For most businesses, a website should come first. It\'s accessible on all devices, doesn\'t require downloads, and is essential for SEO and credibility.</p><h2>When to Add an App</h2><p>Consider a mobile app when you need: daily user engagement, offline functionality, device hardware access (camera, GPS), or a branded presence on the app store.</p><h2>GenzTeck\'s Recommendation</h2><p>We recommend starting with a high-quality website, then adding a mobile app once you have validated your product and built a user base.</p>',
        isPublished: true, sortOrder: 2
      },
      {
        title: 'How QR/NFC Systems Help Restaurants Grow',
        category: 'Restaurant Tech',
        excerpt: 'Discover how digital menus and smart ordering systems are revolutionizing the restaurant industry.',
        content: '<h2>The Digital Menu Revolution</h2><p>QR code menus exploded during COVID-19, but the benefits go far beyond hygiene. They reduce printing costs, allow real-time menu updates, and provide valuable customer data.</p><h2>NFC: The Next Level</h2><p>NFC (Near Field Communication) takes it further — customers simply tap their phone to access menus, make payments, or leave Google reviews. No camera needed.</p><h2>Our Restaurant System</h2><p>GenzTeck\'s complete restaurant system includes QR/NFC menus, customer ordering, kitchen displays, waiter apps, and billing management — all in one integrated platform.</p>',
        isPublished: true, sortOrder: 3
      },
      {
        title: 'Why Admin Panels Matter In Custom Software',
        category: 'Software Development',
        excerpt: 'Behind every great product is a powerful admin panel. Here\'s why this often-overlooked component is crucial.',
        content: '<h2>What is an Admin Panel?</h2><p>An admin panel (or CMS) is the backend interface that lets you manage your software\'s content, users, and data without touching any code. Think of it as the cockpit of your digital product.</p><h2>Why It Matters</h2><p>Without a proper admin panel, every small change requires a developer. With one, your marketing team can update content, your sales team can manage leads, and your operations team can track orders — all independently.</p><h2>GenzTeck Admin Panels</h2><p>We build clean, intuitive admin panels tailored to your exact workflow. No bloat, no confusion — just the tools your team needs to run efficiently.</p>',
        isPublished: true, sortOrder: 4
      },
      {
        title: 'How GenzTeck Builds Business Software',
        category: 'Behind The Scenes',
        excerpt: 'A look inside our development process — from discovery call to launch day.',
        content: '<h2>Step 1: Discovery</h2><p>Every project starts with understanding your business, your customers, and your goals. We ask the right questions to define exactly what we need to build.</p><h2>Step 2: Design</h2><p>We create wireframes and visual designs before writing a single line of code. This saves time and ensures you know exactly what you\'re getting.</p><h2>Step 3: Development</h2><p>Our developers build your project using modern, scalable technologies. We use React, Node.js, and MongoDB for most projects.</p><h2>Step 4: Testing & Launch</h2><p>We test across devices and browsers before going live. Post-launch, we provide support to ensure everything runs smoothly.</p>',
        isPublished: true, sortOrder: 5
      }
    ];

    for (const b of blogsData) {
      await Blog.create({ ...b, slug: slugify(b.title, { lower: true, strict: true }), publishedAt: new Date() });
    }
    console.log('📝 Blogs created (5)');

    console.log('\n🎉 Seed completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Admin Login → admin@genzteck.com / Admin@12345');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  }
}

seed();
