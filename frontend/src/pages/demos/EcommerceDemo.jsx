import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DemoLayout, { useDemo, DemoLink } from '../../components/DemoLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Star, 
  Plus, 
  Minus, 
  Trash2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  X, 
  Menu as MenuIcon, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Check,
  Filter,
  Eye,
  Info,
  DollarSign,
  Heart,
  Send,
  Calendar,
  Clock,
  Award
} from 'lucide-react';

// Shared Product Dataset
const PRODUCTS = [
  { id: 1, name: 'Minimalist Leather Backpack', price: 125, rating: 4.8, category: 'leather', carbonOffset: 4.5, material: 'Veg-Tanned Leather', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Premium Noise-Cancelling Headphones', price: 299, rating: 4.9, category: 'tech', carbonOffset: 6.2, material: 'Recycled Aluminum', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Chrono Series Rose Gold Watch', price: 185, rating: 4.7, category: 'tech', carbonOffset: 3.1, material: 'Recycled Steel', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Vegetable-Tanned Bifold Wallet', price: 65, rating: 4.6, category: 'leather', carbonOffset: 1.8, material: 'Veg-Tanned Leather', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Active Tech Sleeve Organizer', price: 45, rating: 4.8, category: 'tech', carbonOffset: 2.5, material: 'Ocean Plastic Fibers', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Eco-Cotton Heavyweight Sweater', price: 95, rating: 4.9, category: 'apparel', carbonOffset: 5.0, material: '100% Organic Cotton', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Sleek RFID Aluminum Cardholder', price: 35, rating: 4.5, category: 'tech', carbonOffset: 1.5, material: 'Aerospace Grade Aluminum', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Premium Heavy Cotton Canvas Tote', price: 55, rating: 4.7, category: 'apparel', carbonOffset: 2.2, material: 'Organic Cotton Canvas', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80' }
];

function EcomNavbar({ isMobileOpen, setIsMobileOpen, totalCartCount, setIsCartOpen }) {
  const { brandName } = useDemo();
  return (
    <nav className="border-b border-rose-500/10 bg-[#0b0b0e]/95 backdrop-blur-md sticky top-[68px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        <DemoLink to="home" className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5 hover:opacity-90 transition-opacity">
          <ShoppingBag size={22} className="text-rose-400" />
          <span className="truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">{brandName}</span>
        </DemoLink>
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-400">
          <DemoLink to="home" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Home</DemoLink>
          <DemoLink to="about" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Our Ethos</DemoLink>
          <DemoLink to="shop" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Shop</DemoLink>
          <DemoLink to="collections" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Collections</DemoLink>
          <DemoLink to="offers" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Hot Deals</DemoLink>
          <DemoLink to="contact" activeClassName="text-rose-400 font-bold" className="hover:text-rose-400 transition-colors">Contact</DemoLink>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white hover:text-rose-400 transition-all hover:border-rose-500/30 flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="text-xs font-bold hidden sm:inline">Bag</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-[#0b0b0e]">
                {totalCartCount}
              </span>
            )}
          </button>
          <button className="lg:hidden text-white hover:text-rose-400 p-2 bg-zinc-900 border border-zinc-800 rounded-xl" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#0b0b0e] border-b border-rose-500/10 py-6 px-6 space-y-4 flex flex-col"
          >
            <DemoLink to="home" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1 border-b border-zinc-900">Home</DemoLink>
            <DemoLink to="about" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1 border-b border-zinc-900">Our Ethos</DemoLink>
            <DemoLink to="shop" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1 border-b border-zinc-900">Shop</DemoLink>
            <DemoLink to="collections" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1 border-b border-zinc-900">Collections</DemoLink>
            <DemoLink to="offers" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1 border-b border-zinc-900">Hot Deals</DemoLink>
            <DemoLink to="contact" onClick={() => setIsMobileOpen(false)} activeClassName="text-rose-400 font-bold" className="text-sm font-semibold text-zinc-400 py-1">Contact</DemoLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function EcomFooter() {
  const { brandName } = useDemo();
  return (
    <footer className="bg-[#050508] border-t border-zinc-900 pt-20 pb-12 text-xs text-zinc-500 font-light relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="space-y-4">
          <span className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
            <ShoppingBag size={22} className="text-rose-400" />
            {brandName}
          </span>
          <p className="leading-relaxed text-zinc-400 text-sm font-normal">
            A premium circular design ecosystem building hyper-durable accessories, noise-cancelling acoustics, and organic lifestyle pieces for conscious urban living.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Catalog & Links</h4>
          <ul className="space-y-2 flex flex-col font-medium text-zinc-400 text-sm">
            <DemoLink to="home" className="hover:text-rose-400 transition-colors">Home Landing</DemoLink>
            <DemoLink to="about" className="hover:text-rose-400 transition-colors">Our Sustainability Ethos</DemoLink>
            <DemoLink to="shop" className="hover:text-rose-400 transition-colors">Shop Catalog</DemoLink>
            <DemoLink to="collections" className="hover:text-rose-400 transition-colors">Design Collections</DemoLink>
            <DemoLink to="offers" className="hover:text-rose-400 transition-colors font-semibold text-rose-400">Promo Offers</DemoLink>
            <DemoLink to="contact" className="hover:text-rose-400 transition-colors">Showrooms & Booking</DemoLink>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Circularity Specs</h4>
          <p className="text-zinc-400 text-sm">✓ Vegetable-Tanned Full Grain Leather</p>
          <p className="text-zinc-400 text-sm">✓ 100% Recycled Scrap Steel & Aluminum</p>
          <p className="text-zinc-400 text-sm">✓ Biodegradable Wood Pulp Packagings</p>
          <p className="text-rose-400 font-semibold text-sm">✓ Certified Climate-Offset Global Delivery</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">Support Desk</h4>
          <p className="flex items-center gap-2 text-zinc-400 text-sm"><MapPin size={16} className="text-rose-400 shrink-0" /> 101 E-commerce Plz, Soho, New York</p>
          <p className="flex items-center gap-2 text-zinc-400 text-sm"><Phone size={16} className="text-rose-400 shrink-0" /> +1 (555) 901-2345</p>
          <p className="text-zinc-500 mt-2 text-xs font-normal">Customer Response Rate: 99.4% (Live Agent chat available)</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-zinc-400">© {new Date().getFullYear()} {brandName}. Handcrafted Circular Luxury. All Rights Reserved.</p>
        <div className="flex gap-6 text-zinc-400 font-medium">
          <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-rose-400 transition-colors">Circular Recycling Terms</a>
        </div>
      </div>
    </footer>
  );
}

function EcomInnerHeader({ title, subtitle }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#14141d] to-[#0b0b0e] border-b border-rose-500/10 text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80')" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">{title}</h1>
        <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="flex justify-center items-center gap-2 text-xs text-zinc-500 mt-6 bg-zinc-900/40 border border-zinc-800/60 px-4 py-2 rounded-full w-fit mx-auto backdrop-blur-sm">
          <DemoLink to="home" className="hover:text-rose-400 transition-colors">Home</DemoLink>
          <span className="text-zinc-700">/</span>
          <span className="text-rose-400 font-semibold uppercase">{title}</span>
        </div>
      </div>
    </section>
  );
}

// Global FAQ Accordion Component
function EcomFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#121217] border border-zinc-850 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-800">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full text-left p-6 font-heading font-bold text-white flex justify-between items-center hover:bg-[#16161f]/50 transition-colors focus:outline-none"
          >
            <span className="text-sm md:text-base font-semibold">{faq.q}</span>
            <span className="text-rose-400 text-lg shrink-0 ml-4">{openIdx === idx ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {openIdx === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed font-light border-t border-zinc-900/60 pt-4">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ----------------------------------------------------
// 1. HOME VIEW
// ----------------------------------------------------
function HomeView({ addToCart }) {
  const { brandName } = useDemo();
  
  // Interactive Capsule Wardrobe builder state
  const [selectedItems, setSelectedItems] = useState([1, 2]); // defaults: backpack and headphones
  const [addedBundle, setAddedBundle] = useState(false);

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter(item => item !== id));
      }
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Calculate discounts based on count
  const rawPrice = selectedItems.reduce((sum, id) => {
    const item = PRODUCTS.find(p => p.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  let discountPct = 0;
  if (selectedItems.length === 2) discountPct = 10;
  else if (selectedItems.length === 3) discountPct = 15;
  else if (selectedItems.length >= 4) discountPct = 20;

  const finalPrice = Math.round(rawPrice * (1 - discountPct / 100));
  const carbonSaved = (selectedItems.length * 4.2).toFixed(1);

  const addBundleToBag = () => {
    selectedItems.forEach(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (p) addToCart(p);
    });
    setAddedBundle(true);
    setTimeout(() => setAddedBundle(false), 2000);
  };

  const newsletterSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the circle! Use code THREAD20 for 20% off your next purchase.");
  };

  const homeFaqs = [
    { q: "How are the products carbon-offset?", a: "We calculate the carbon emissions generated from raw material sourcing, craft assembly, and air/sea logistics. We then offset 100% of these calculations by investing directly in certified global reforestation and gold standard soil-carbon initiatives." },
    { q: "What is the Lifetime Refurbish Guarantee?", a: "If your backpack seams open or your steel cardholder hinges stiffen after years of use, ship it back to us. We will replace or refurbish it free of cost. If it is beyond repair, we recycle it and credit you 15% towards your next buy." },
    { q: "Do the electronic accessories carry a warranty?", a: "Yes, our noise-cancelling audio collection is backed by a 2-year full replacement warranty for any driver malfunctions or battery degradation issues." },
    { q: "Where are show-off fittings booked?", a: "We operate private booking showrooms in Tokyo, Copenhagen, and New York. You can book an hours private styling panel using our Scheduling module under the Contact subpage." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 2. Premium Hero Section */}
      <header className="relative min-h-[85vh] text-center overflow-hidden flex items-center justify-center pt-24 pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e]/80 via-[#0b0b0e]/70 to-[#0b0b0e] z-10" />
        <div className="absolute inset-0 bg-cover bg-center scale-102 hover:scale-100 transition-all duration-10000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0b0e] to-transparent z-15" />
        
        <div className="relative z-20 max-w-5xl px-6 space-y-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-rose-400 text-xs font-semibold tracking-[4px] uppercase bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-full inline-block backdrop-blur-md">
              #SustainableLuxury
            </span>
            <span className="text-zinc-400 text-xs font-semibold tracking-[4px] uppercase bg-zinc-800/40 border border-zinc-700/20 px-4 py-2 rounded-full inline-block backdrop-blur-md">
              #CircularEcosystem
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl lg:text-7xl lg:text-8xl font-heading font-black text-white leading-none uppercase tracking-tight">
            Curated Minimal Wear <br/>
            <span className="text-rose-400 bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">{brandName}</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Engineered for modern utility and carbon-neutral lifetimes. Explore premium noise-cancellation audio, organic full-grain leather bags, and minimal urban apparel.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4 items-center">
            <DemoLink to="shop" className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-rose-600 hover:brightness-110 text-white px-10 py-4.5 rounded-2xl font-bold uppercase text-xs tracking-wider transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2">
              <span>Explore Shop Catalog</span>
              <ArrowRight size={16} />
            </DemoLink>
            <DemoLink to="about" className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white px-10 py-4.5 rounded-2xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center">
              Our Sourcing Ethos
            </DemoLink>
          </div>
        </div>
      </header>

      {/* 3. Trust / Stat Cards */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: ShieldCheck, title: "256-Bit SSL Checkout", desc: "100% Encrypted transactions with global security standards." },
          { icon: Sparkles, title: "Artisanal Integrity", desc: "Meticulously built in numbered micro-batches to prevent waste." },
          { icon: RefreshCw, title: "Circular Recycling", desc: "Trade old models back for 15% off; we fully recycle components." },
          { icon: Award, title: "Climate Carbon Offset", desc: "We track and offset footprint emissions on every single box shipped." }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#121217]/90 border border-zinc-850 p-6 rounded-2xl backdrop-blur-md shadow-2xl flex flex-col items-center text-center space-y-3 hover:border-rose-500/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <item.icon size={22} className="text-rose-400" />
            </div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">{item.title}</h3>
            <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. About Preview Section */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit">
            The Circular Origin
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white leading-tight uppercase">
            Responsibly Sourced. <br/>
            Meticulously Crafted.
          </h2>
          <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">
            We reject the disposable timelines of fast fashion. At {brandName}, our accessories represent decades of design maturity. We utilize biological vegetable tanning processes that emit 80% fewer toxins than industrial chromium-tanning.
          </p>
          <p className="text-zinc-500 leading-relaxed font-light text-xs md:text-sm">
            Every thread, buckle, and audio driver is logged into our circular registry. We build objects that age gracefully, developing unique patinas that represent your lifestyle journey.
          </p>
          <div className="pt-4">
            <DemoLink to="about" className="bg-zinc-900 border border-zinc-800 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all hover:bg-zinc-850 hover:border-zinc-700 inline-flex items-center gap-2">
              <span>Read Our Full Ethos</span>
              <ArrowRight size={14} />
            </DemoLink>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent blur-[40px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative border border-zinc-850 rounded-2xl overflow-hidden shadow-2xl bg-zinc-950">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Artisanal Workshop Sourcing" className="w-full h-full object-cover aspect-[4/3] group-hover:scale-102 transition-all duration-700" />
            <div className="absolute bottom-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl text-left max-w-xs">
              <span className="text-[10px] text-rose-400 font-extrabold uppercase block tracking-wider">Circular Lab Log</span>
              <p className="text-white text-xs font-semibold mt-1">"Micro-batch organic stitches are verified carbon-neutral from source to carrier."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services/Products Preview (Featured Products) */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase block">Featured Models</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">The Essential Core</h2>
            </div>
            <DemoLink to="shop" className="text-rose-400 hover:text-rose-300 font-bold uppercase text-xs tracking-wider transition-all flex items-center gap-2 border-b border-rose-500/20 pb-1">
              <span>View Full Catalog</span>
              <ArrowRight size={14} />
            </DemoLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="bg-[#121217]/50 border border-zinc-850 rounded-3xl overflow-hidden group hover:border-rose-500/35 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(244,63,94,0.05)]">
                <div className="h-72 overflow-hidden relative bg-zinc-950">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 bg-rose-500 text-white text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-lg">
                    Best Seller
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                      <span>{p.material}</span>
                      <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">-{p.carbonOffset}kg CO₂</span>
                    </div>
                    <h3 className="font-heading font-black text-white text-lg group-hover:text-rose-400 transition-colors">{p.name}</h3>
                    <div className="flex items-center gap-1 text-amber-400 pt-1">
                      <Star size={12} className="fill-current" />
                      <span className="text-xs font-semibold">{p.rating} Verified Ratings</span>
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-zinc-900">
                    <span className="text-2xl font-heading font-black text-white">${p.price}</span>
                    <button onClick={() => addToCart(p)} className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold uppercase text-[10px] tracking-wider px-5 py-3 rounded-xl transition-all flex items-center gap-2">
                      <ShoppingBag size={12} />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Showcase/Gallery Banners */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Designed Categories</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Curated Series</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Tech Accessories', count: '14 Items', desc: 'Noise-cancellation audio, organic sleeve organisers, RFID block cardholders.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' },
            { title: 'Leather Backpacks', count: '8 Items', desc: 'Handcrafted full-grain leather shells with micro-adjust metal straps.', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80' }
          ].map((c, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 rounded-3xl overflow-hidden relative group aspect-[16/10] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-all duration-700" />
              <div className="relative z-20 p-8 space-y-3">
                <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">{c.count}</span>
                <h3 className="text-2xl font-heading font-black text-white uppercase">{c.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light max-w-md">{c.desc}</p>
                <div className="pt-2">
                  <DemoLink to="collections" className="text-white hover:text-rose-400 font-bold uppercase text-xs tracking-wider transition-colors inline-flex items-center gap-1.5">
                    <span>Inspect Series</span>
                    <ArrowRight size={12} />
                  </DemoLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Industry-Specific Feature: Capsule Outfit Builder Widget */}
      <section className="py-24 bg-gradient-to-b from-[#0e0e12] to-[#0b0b0e] border-y border-zinc-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit mx-auto">
              Interactive Capsule Studio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Outfit Bundle Builder</h2>
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl mx-auto">
              Select multiple essential products to craft your minimal daily outfit. Saving raw packaging emissions unlocks progressive bundle discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left selector */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-2">Select Your Outfit Pieces</h3>
              {PRODUCTS.slice(0, 4).map((p) => {
                const isSelected = selectedItems.includes(p.id);
                return (
                  <div 
                    key={p.id} 
                    onClick={() => toggleItem(p.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected 
                        ? 'bg-rose-500/5 border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.05)]' 
                        : 'bg-zinc-900/40 border-zinc-850 hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.img} alt={p.name} className="w-12 h-12 object-cover rounded-xl border border-zinc-800" />
                      <div className="text-left">
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{p.material}</span>
                        <h4 className="text-xs font-bold text-white line-clamp-1">{p.name}</h4>
                        <span className="text-xs font-bold text-rose-400">${p.price}</span>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                      isSelected ? 'bg-rose-500 border-rose-500 text-white' : 'border-zinc-700'
                    }`}>
                      {isSelected && <Check size={12} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Visual Mock */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-zinc-950/40 border border-zinc-850 rounded-3xl aspect-square">
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-6">Capsule Visualizer</span>
              <div className="relative w-48 h-48 border border-dashed border-zinc-800 rounded-full flex items-center justify-center">
                {/* Visual lines */}
                {selectedItems.map((id, index) => {
                  const angle = (index * 360) / selectedItems.length;
                  const item = PRODUCTS.find(p => p.id === id);
                  return (
                    <motion.div 
                      key={id}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 25 + index * 5, ease: 'linear' }}
                      className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-rose-500/20 flex items-center justify-center overflow-hidden absolute top-0" style={{ transform: `rotate(-${angle}deg)` }}>
                        <img src={item?.img} alt="" className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  );
                })}
                <div className="text-center z-10">
                  <ShoppingBag size={24} className="text-rose-400 mx-auto mb-1 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-semibold block uppercase">Outfit Bundle</span>
                  <span className="text-white font-extrabold text-sm block">{selectedItems.length} Items Selected</span>
                </div>
              </div>
            </div>

            {/* Right Calc details */}
            <div className="lg:col-span-4 bg-[#121217] border border-zinc-850 p-8 rounded-3xl space-y-6">
              <div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Eco Carbon Offset Impact</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-3xl font-heading font-black text-emerald-400">-{carbonSaved} kg</span>
                  <span className="text-xs text-zinc-400 font-light">CO₂ Saved</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min((selectedItems.length / 4) * 100, 100)}%` }} />
                </div>
              </div>

              <div className="border-t border-zinc-850/60 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Raw Price:</span>
                  <span className="text-white font-semibold">${rawPrice}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Bundle discount ({discountPct}%):</span>
                  <span className="text-rose-400 font-semibold">-${rawPrice - finalPrice}</span>
                </div>
                <div className="flex justify-between items-end border-t border-zinc-800 pt-3 text-white">
                  <span className="font-semibold">Bundle Price:</span>
                  <span className="text-2xl font-heading font-black text-rose-400">${finalPrice}</span>
                </div>
              </div>

              <button 
                onClick={addBundleToBag} 
                disabled={addedBundle}
                className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-emerald-500 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {addedBundle ? (
                  <>
                    <Check size={16} />
                    <span>Bundle Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add Outfit Bundle to Bag</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-zinc-500 text-center font-light">Includes free global priority carbon-offset express shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sourcing Process / How It Works */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-20">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">The Sourcing Roadmap</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            { step: "01", title: "Ethical Sourcing", desc: "We source organic yarns and chromium-free leathers directly from European cooperatives." },
            { step: "02", title: "Micro-Batch Crafting", desc: "No massive storage overstock. Items are cut and hand-tailored in specific runs." },
            { step: "03", title: "Carbon-Offset Delivery", desc: "Transit emissions are measured and offset 100% via certified forestry projects." },
            { step: "04", title: "Circular Recycle desk", desc: "Trade old models back when worn out for a 15% discount code; we melt and reuse fibers." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121217]/50 border border-zinc-850 p-6 rounded-2xl relative space-y-4 hover:border-zinc-800 transition-all duration-300">
              <span className="text-4xl font-heading font-black text-rose-500/10 absolute top-4 right-4">{item.step}</span>
              <h3 className="font-heading font-black text-white text-base uppercase mt-2">{item.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Pricing/Packages/Plans section */}
      <section className="py-24 bg-[#0e0e12] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Subscription Wardrobe Plans</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Capsule Subscriptions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Minimalist Starter", price: "49", period: "month", desc: "Perfect for starting your circular wardrobe rotation.", items: ["1 Core accessory per month", "Circular eco-cleaning guidelines", "Free carbon-neutral shipping", "Access to limited edition drops"] },
              { name: "Executive Capsule", price: "99", period: "month", desc: "The ultimate option for full apparel utility.", items: ["2 Core accessories per month", "Priority access to new designs", "Complimentary repair kits", "15% Member store discount", "Annual carbon impact report"], popular: true },
              { name: "Collector Wardrobe", price: "149", period: "month", desc: "Unlimited accessory rotation with priority trade-in.", items: ["3 Core items per month", "Lifetime sizing replacement trials", "24/7 Priority VIP assistant desk", "20% Member store discount", "Full circular recycling priority"] }
            ].map((plan, idx) => (
              <div key={idx} className={`bg-[#121217]/80 border rounded-3xl p-8 flex flex-col justify-between relative ${
                plan.popular ? 'border-rose-500/35 shadow-[0_0_20px_rgba(244,63,94,0.05)]' : 'border-zinc-850'
              }`}>
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                    Most Selected
                  </span>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg uppercase tracking-wide">{plan.name}</h3>
                    <p className="text-zinc-500 text-xs mt-1.5 font-light">{plan.desc}</p>
                  </div>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-4xl font-heading font-black">${plan.price}</span>
                    <span className="text-xs text-zinc-500">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-xs text-zinc-400">
                    {plan.items.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <Check size={14} className="text-rose-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <DemoLink to="contact" className={`w-full text-center py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all block ${
                    plan.popular ? 'bg-rose-500 hover:bg-rose-600 text-white' : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-850'
                  }`}>
                    Subscribe Capsule
                  </DemoLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Verified Customer Quotes</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Conscious Buyers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Evelyn Carter", role: "Sustainability Architect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", text: "The Minimalist Leather Backpack is beautifully crafted. The vegetable tanning has aged beautifully over 2 years, showing a premium dark patina." },
            { name: "Marcus Vance", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", text: "The noise-cancelling acoustics are phenomenal. But knowing that the raw aluminum components were fully sourced from recycled scrap makes the purchase truly premium." },
            { name: "Sora Tanaka", role: "Textile Engineer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80", text: "Exceptional cotton heavyweight knit. The seams are bound perfectly and the organic fabric feels extremely heavy yet breathes incredibly well." }
          ].map((test, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 p-8 rounded-3xl space-y-6 hover:border-zinc-800 transition-all duration-300">
              <div className="flex items-center gap-1.5 text-rose-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
              </div>
              <p className="text-zinc-400 text-xs md:text-sm italic leading-relaxed font-light">"{test.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-900/60">
                <img src={test.img} alt={test.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{test.name}</h4>
                  <span className="text-[10px] text-zinc-500 font-semibold">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-24 bg-[#0e0e12] border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Circular Q&A</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Frequently Asked Questions</h2>
          </div>
          <EcomFAQ faqs={homeFaqs} />
        </div>
      </section>

      {/* 12. Strong CTA Section */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-r from-rose-950/20 to-black border-t border-zinc-900 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80')" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 space-y-6">
          <span className="text-rose-400 text-xs font-bold tracking-[4px] uppercase bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-full inline-block backdrop-blur-md">
            Join Circular Citizenry
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase leading-none">
            Unlock 20% Discount Code
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Subscribe to our seasonal micro-batch newsletters and receive a certified promo key instantly, plus early access to sizing drops.
          </p>

          <form onSubmit={newsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="bg-zinc-900 border border-zinc-800 text-white rounded-xl px-5 py-3.5 text-xs focus:outline-none focus:border-rose-500/50 flex-1"
            />
            <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white font-bold uppercase text-xs tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md">
              Secure Promo Key
            </button>
          </form>
          <span className="text-[10px] text-zinc-600 block">We value your privacy. Unsubscribe at any time.</span>
        </div>
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 2. ABOUT VIEW
// ----------------------------------------------------
function AboutView() {
  const { brandName } = useDemo();
  
  const aboutFaqs = [
    { q: "Where do you source your organic leathers?", a: "We source entirely from traditional family-run tanneries in Tuscany, Italy, which use natural chestnut and oak bark solutions to tan full-grain hides, completely bypassing toxic heavy metals." },
    { q: "How are the raw metals audited?", a: "Our raw stainless steel and aluminum scraps are certified by the recycled component standards agency. We melt and refine the scrap under certified clean energy setups in electric arc kilns." },
    { q: "Can I inspect your carbon offset certificates?", a: "Yes, our carbon accounting sheets and reforestation offsets registry details are updated semi-annually and available on request via customer support." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Section 1: Inner Header */}
      <EcomInnerHeader title="Our Ethos" subtitle={`Learn how ${brandName} is defining the slow-fashion circular lifecycle.`} />

      {/* Section 2: Heritage Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">The Sourcing Origin</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">The slow-fashion lifecycle</h2>
          <p className="text-zinc-400 leading-relaxed font-light text-sm">
            At {brandName}, we believe that true luxury is conscious. The fast fashion industry creates millions of tons of landfill garbage annually. We operate on a zero-waste policy, fabricating in numbered micro-batches and prioritizing item repair and recirculation.
          </p>
          <p className="text-zinc-500 leading-relaxed font-light text-xs">
            Every component in our design catalog—from the ocean plastic lining inside our backpacks to the recycled aluminum drivers inside our audio headphones—is logged with a unique structural code, facilitating full disassembly and recycling.
          </p>
        </div>
        <div className="border border-zinc-850 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Sourcing craftsmanship" className="w-full h-full object-cover aspect-video" />
        </div>
      </section>

      {/* Section 3: Carbon Offset Metrics */}
      <section className="py-20 bg-[#0e0e12] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "12,450 Tons", label: "CO₂ Emissions Offset", desc: "Invested directly into certified soil-carbon sinks." },
            { value: "84% Saved", label: "Water Conservation", desc: "Compared to typical garment and accessory production." },
            { value: "100% Circular", label: "Biodegradable Packaging", desc: "No single-use plastics or petrochemical foils." }
          ].map((stat, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-850 p-8 rounded-2xl">
              <span className="text-3xl md:text-4xl font-heading font-black text-rose-400 block">{stat.value}</span>
              <span className="text-sm text-white font-bold block mt-2 tracking-wider uppercase">{stat.label}</span>
              <p className="text-zinc-500 text-xs font-light mt-1.5">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Creative Directors */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">The Design Panel</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Meet the Artisans</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Evelyn Carter", role: "Head of Materials Sourcing", bio: "Spent 10 years tracing carbon logs in European knit networks.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
            { name: "Marcus Vance", role: "Chief Design Architect", bio: "Pioneered structural modular layouts in heavy canvas wearables.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
            { name: "Sora Tanaka", role: "Lead Textile Engineer", bio: "Developed the ocean-waste weave polymer patterns utilized in our backpacks.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" }
          ].map((member, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-3xl text-center space-y-4 hover:border-zinc-800 transition-all duration-300">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover border border-zinc-800" />
              <div>
                <h3 className="font-heading font-black text-white text-base uppercase">{member.name}</h3>
                <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-wide block">{member.role}</span>
              </div>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Materials Roster */}
      <section className="py-24 bg-[#0e0e12] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Material Origin Details</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Sustainable Materials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Tuscan Vegetable Leather", desc: "Tanned using oak extracts. Highly durable, ages with premium visual color tones, chemical-free." },
              { name: "Organic Heavyweight Cotton", desc: "No synthetic fertilizers used. Conserves local soil health and saves thousands of gallons of water." },
              { name: "Recycled Automotive Steel", desc: "Sourced from car frame scrap, processed in cleaner electric arc mills to lower emission metrics." },
              { name: "Ocean Waste Poly-Weave", desc: "Recycled plastic PET bottle polymers woven into extremely durable micro-grid shell covers." }
            ].map((mat, idx) => (
              <div key={idx} className="bg-[#121217]/50 border border-zinc-850 p-6 rounded-2xl flex gap-4 items-start hover:border-zinc-800 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                  <Check size={18} className="text-rose-400" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-white text-sm uppercase tracking-wide">{mat.name}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light mt-1">{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Sustainability FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Ethical Q&A</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Transparency Accordion</h2>
        </div>
        <EcomFAQ faqs={aboutFaqs} />
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 3. SHOP VIEW
// ----------------------------------------------------
function ShopView({ addToCart }) {
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Fit advisor state
  const [height, setHeight] = useState(175); // cm
  const [weight, setWeight] = useState(70); // kg

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getRecommendedSize = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    if (height < 165) {
      if (bmi < 20) return 'XS';
      if (bmi < 25) return 'S';
      return 'M';
    } else if (height < 180) {
      if (bmi < 21) return 'S';
      if (bmi < 26) return 'M';
      return 'L';
    } else {
      if (bmi < 22) return 'M';
      if (bmi < 27) return 'L';
      return 'XL';
    }
  };

  const shopFaqs = [
    { q: "How long does shipping take?", a: "We process order batches within 24 hours. Transit averages 3-5 business days across US, Canada, and Europe. Express delivery options can be selected at the mock checkout drawer." },
    { q: "Are sizing swap returns free?", a: "Yes, we provide circular returns. Return shipping labels are pre-paid. We cover 100% of the return logistics carbon offset charges." },
    { q: "When are new limited-edition runs drop?", a: "We release micro-batches on the first Tuesday of every quarter. Sign up to our circular citizenship newsletter to get early access keys." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0b0e]">
      {/* Section 1: Inner Header */}
      <EcomInnerHeader title="Shop Catalog" subtitle="Explore our certified minimal wearables and eco-accessories." />

      {/* Section 2: Filter/Search Panel */}
      <section className="py-12 border-b border-zinc-900 bg-[#0e0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="w-full md:max-w-md relative">
            <input 
              type="text" 
              placeholder="Search catalog models..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-5 py-3.5 text-xs focus:outline-none focus:border-rose-500/50"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Series' },
              { id: 'leather', label: 'Leather Bags' },
              { id: 'tech', label: 'Tech Accessories' },
              { id: 'apparel', label: 'Eco-Apparel' }
            ].map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat.id 
                    ? 'bg-rose-500 border-rose-500 text-white shadow-md' 
                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Full Product Catalog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 text-sm">
            No matching models found. Try checking another category pill.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id} className="bg-[#121217]/40 border border-zinc-850 rounded-2xl overflow-hidden group hover:border-rose-500/25 transition-all duration-300 flex flex-col justify-between">
                <div className="h-64 overflow-hidden relative bg-zinc-950">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                </div>
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">{p.material}</span>
                    <h3 className="font-heading font-black text-white text-base group-hover:text-rose-400 transition-colors line-clamp-1">{p.name}</h3>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={11} className="fill-current" />
                        <span className="text-[11px] font-semibold">{p.rating}</span>
                      </div>
                      <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">-{p.carbonOffset}kg CO₂</span>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-zinc-900/60">
                    <span className="text-xl font-heading font-black text-white">${p.price}</span>
                    <button onClick={() => addToCart(p)} className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold uppercase text-[9px] tracking-wider px-4 py-2.5 rounded-xl transition-all">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section 4: Sizing & Fit Advisor Widget */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-4 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit mx-auto">
              Fit Advisor Studio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Sizing & Fit Advisor</h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-xl mx-auto">
              Select your metrics to calculate recommended wear sizes. Avoid shipping resource loops by using our verified algorithm.
            </p>
          </div>

          <div className="bg-[#121217] border border-zinc-850 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase">
                  <span>Height:</span>
                  <span className="text-white">{height} cm ({Math.round(height/2.54)} in)</span>
                </div>
                <input 
                  type="range" 
                  min="150" 
                  max="210" 
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase">
                  <span>Weight:</span>
                  <span className="text-white">{weight} kg ({Math.round(weight*2.204)} lbs)</span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="120" 
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
            </div>

            <div className="bg-[#0b0b0e] border border-zinc-800 p-6 rounded-2xl text-center space-y-3">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">Recommended Model Fit</span>
              <div className="text-5xl font-heading font-black text-rose-400 bg-rose-500/5 py-4 rounded-xl border border-rose-500/10 w-28 mx-auto shadow-inner">
                {getRecommendedSize()}
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed px-4">
                Recommended size balances athletic shoulder freedom with length configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trust guarantees */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          { title: "Secure Checkout", desc: "Certified 256-bit secure gateway checkouts." },
          { title: "30-Day Circular Trial", desc: "Test the size at home, exchange easily with zero cost." },
          { title: "Circular Eco Returns", desc: "Return shipping offsets are fully pre-paid by us." }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#121217]/50 border border-zinc-850 p-6 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-rose-400" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide">{item.title}</h3>
              <p className="text-zinc-500 text-xs mt-1 font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Section 6: Catalog FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Restock & Sizes Q&A</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Catalog FAQs</h2>
        </div>
        <EcomFAQ faqs={shopFaqs} />
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 4. COLLECTIONS VIEW
// ----------------------------------------------------
function CollectionsView() {
  const collectionFaqs = [
    { q: "Are collection series limited in stock?", a: "Yes. To prevent warehouse landfill waste, we produce exactly according to regional demand forecasts. Standard runs average between 500 and 1,000 units globally." },
    { q: "How frequently do you release collections?", a: "We launch seasonal batches: Spring/Summer and Autumn/Winter. Limited tech collaboration collections drop as capsule releases intermittently." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Section 1: Inner Header */}
      <EcomInnerHeader title="Collections" subtitle="Inspect modular wardrobe series curated by our design house." />

      {/* Section 2: Collections Showcase Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Autumn Minimalist Series", desc: "Organic cotton heavyweight knits and wool coats built in matching charcoal earth hues.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
            { title: "Cyberpunk Audio Series", desc: "Recycled structural aluminum drivers housing custom high-output noise-cancellation micro-chips.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" },
            { title: "Executive Leather Series", desc: "Oak tanned work bags, bifold wallets, and pocket organizers configured with lifetime stitches.", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" },
            { title: "Eco-Luxe Lounge Wear", desc: "Bamboo pulp linen sheets, micro-knit pullovers, and recycled plastic drawstrings.", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80" }
          ].map((col, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 rounded-3xl overflow-hidden relative group aspect-[16/9] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />
              <img src={col.img} alt={col.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" />
              <div className="relative z-20 p-8 space-y-2">
                <h3 className="text-2xl font-heading font-black text-white uppercase">{col.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light max-w-md leading-relaxed">{col.desc}</p>
                <div className="pt-2">
                  <DemoLink to="shop" className="text-white hover:text-rose-400 font-bold uppercase text-xs tracking-wider transition-colors inline-flex items-center gap-1">
                    <span>Inspect Series Shop</span>
                    <ArrowRight size={12} />
                  </DemoLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Outfit Lookbook Carousel/Gallery */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Styling Vision</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Seasonal Lookbook</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", title: "Minimal layering", quote: "Pair charcoal knits with structured leather straps for premium depth." },
              { img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80", title: "Urban commuter", quote: "Secure headphones, wallets, and planners inside a modular leather shell." },
              { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80", title: "Organic lounge", quote: "Choose breathable linen shirts to maintain comfort indexes during global transits." }
            ].map((look, idx) => (
              <div key={idx} className="border border-zinc-850 rounded-2xl overflow-hidden bg-zinc-950 shadow-lg group">
                <div className="h-80 overflow-hidden relative">
                  <img src={look.img} alt={look.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" />
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest">{look.title}</h4>
                  <p className="text-white text-sm font-semibold italic">"{look.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Global Sourcing Map */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center space-y-12">
        <div className="space-y-3">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Global Sourcing transparency</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Regional Materials Map</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { region: "Tuscany, Italy", item: "Oak-Tanned Leather Hides", detail: "Natural vegetable curing pits working organic hides." },
            { region: "Kyoto, Japan", item: "Precision Driver Casing", desc: "Acoustic micro-drivers calibrated in clean-room facilities." },
            { region: "Copenhagen, Denmark", item: "Organic Yarn Mills", desc: "European cotton weavers tracking absolute resource inputs." }
          ].map((loc, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-2xl text-left space-y-3">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block">{loc.region}</span>
              <h3 className="text-white font-heading font-bold text-base uppercase">{loc.item}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">{loc.detail || loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Minimalist Wardrobe Guideline */}
      <section className="py-24 bg-[#0e0e12] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "The Rule of 10", desc: "Own only 10 essential models of accessories and wear. Swapping out worn models reduces waste cycles." },
            { title: "Color Cohesion", desc: "Stick to charcoal, neutral gray, sand, and rose gold. Interchanging components becomes seamless." },
            { title: "Modular Attachments", desc: "Utilize clip hooks and cardholders that snap onto backpack shells for active utility adjustments." }
          ].map((rule, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-850 p-6 rounded-2xl space-y-3">
              <span className="text-2xl font-heading font-black text-rose-500/10">0{idx+1}</span>
              <h3 className="font-heading font-bold text-white text-base uppercase">{rule.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Collections FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Collections Release Q&A</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Release FAQs</h2>
        </div>
        <EcomFAQ faqs={collectionFaqs} />
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 5. OFFERS VIEW
// ----------------------------------------------------
function OffersView() {
  const { brandName } = useDemo();
  const [copiedKey, setCopiedKey] = useState(null);

  // Gift card builder state
  const [giftAmount, setGiftAmount] = useState(100);
  const [recipient, setRecipient] = useState('Jean-Luc');
  const [note, setNote] = useState('Happy circular holiday!');
  const [giftSaved, setGiftSaved] = useState(false);

  const copyPromoCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedKey(code);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePurchaseGift = (e) => {
    e.preventDefault();
    setGiftSaved(true);
    setTimeout(() => setGiftSaved(false), 3000);
  };

  const offersFaqs = [
    { q: "Can I combine promo keys?", a: "No, only one discount code can be active per order checkout. High-tier express shipping promos automatically apply based on shopping bag sums." },
    { q: "How long are gift card values active?", a: "Gift card values never expire. They are stored on our secure circular database ledger." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0b0e]">
      {/* Section 1: Inner Header */}
      <EcomInnerHeader title="Promo Offers" subtitle="Browse active discount codes and customization setups." />

      {/* Section 2: Promo Discount Cards */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { code: `${brandName.replace(/\s+/g, '').toUpperCase()}20`, disc: '20% OFF Site-wide', desc: 'Applies to all new arrival items. Carbon-neutral shipping remains free.' },
          { code: 'ECOFRESH', disc: '15% Off Organic Sweaters', desc: 'Valid for eco-cotton knit collections during our spring rotation.' },
          { code: 'EXPRESS150', disc: 'Free Express Airmail', desc: 'Secure priority express logistics on orders exceeding $150.' }
        ].map((o, idx) => (
          <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-2xl text-center space-y-4 hover:border-zinc-800 transition-colors">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block">{o.disc}</span>
            <div 
              onClick={() => copyPromoCode(o.code)}
              className="bg-[#0b0b0e] border border-rose-500/25 px-4 py-3 rounded-xl text-sm font-mono text-white cursor-pointer select-all inline-block hover:border-rose-500/50 transition-all w-full"
            >
              {copiedKey === o.code ? '✓ Copied!' : o.code}
            </div>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </section>

      {/* Section 3: Subscription plans comparison table */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-3 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Subscription Breakdown</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Plan Comparisons</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm text-zinc-400 border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-white font-bold uppercase tracking-wider">
                  <th className="pb-4">Core Feature</th>
                  <th className="pb-4 text-center">Starter ($49)</th>
                  <th className="pb-4 text-center">Executive ($99)</th>
                  <th className="pb-4 text-center">Collector ($149)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {[
                  { feat: "Monthly Items", s: "1 Item", e: "2 Items", c: "3 Items" },
                  { feat: "Priority Launches Access", s: "24h Delay", e: "Instant Access", c: "1 Week Early Access" },
                  { feat: "Storewide discount code", s: "10% Off", e: "15% Off", c: "20% Off" },
                  { feat: "Repair kit service", s: "Self repair kit", e: "Free return refurbish", c: "Lifetime custom replacements" },
                  { feat: "Shipping updates", s: "Standard offset", e: "Express offset", c: "VIP courier offset" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/30">
                    <td className="py-4 font-semibold text-white">{row.feat}</td>
                    <td className="py-4 text-center">{row.s}</td>
                    <td className="py-4 text-center text-rose-400 font-semibold">{row.e}</td>
                    <td className="py-4 text-center">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Loyalty Program Tiers */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Loyalty Ranks</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Member Tiers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tier: "Bronze Circle", spend: "Starter Rank", bonus: "1x Points multiplier on orders.", perk: "Access to online sizing calculators." },
            { tier: "Silver Circle", spend: "Spend $250+", bonus: "1.2x Points multiplier on orders.", perk: "Access to eco-restoration trade-in schemes." },
            { tier: "Gold Circle", spend: "Spend $500+", bonus: "1.5x Points multiplier on orders.", perk: "Free express shipping updates on all orders." },
            { tier: "Platinum Circle", spend: "Spend $1,000+", bonus: "2x Points multiplier on orders.", perk: "24/7 Styling assistant lines, VIP early drops." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-2xl space-y-3 hover:border-zinc-800 transition-colors">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block">{item.tier}</span>
              <span className="text-white font-extrabold text-sm block">{item.spend}</span>
              <p className="text-zinc-400 text-xs font-medium">{item.bonus}</p>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Interactive Gift Card Creator */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit mx-auto">
              Interactive Gift Studio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Gift Card Designer</h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-xl mx-auto">
              Create a custom circular gift card. Input recipient name and message to preview our clean card visualizer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Input forms */}
            <form onSubmit={handlePurchaseGift} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Gift Amount</label>
                <div className="flex gap-2">
                  {[50, 100, 250, 500].map((amt) => (
                    <button 
                      type="button"
                      key={amt} 
                      onClick={() => setGiftAmount(amt)}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                        giftAmount === amt 
                          ? 'bg-rose-500 border-rose-500 text-white' 
                          : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:border-zinc-800 hover:text-white'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-heading">Recipient Name</label>
                <input 
                  type="text" 
                  required 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-heading">Custom Note</label>
                <textarea 
                  rows={2} 
                  required 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50 resize-none" 
                />
              </div>

              <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2">
                <span>{giftSaved ? '✓ Card Issued!' : 'Issue Digital Gift Card'}</span>
              </button>
            </form>

            {/* Visual preview */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent blur-[30px] rounded-2xl" />
              <div className="relative bg-gradient-to-br from-[#1c1c28] via-[#121217] to-black border border-zinc-850 p-8 rounded-3xl aspect-[1.6/1] flex flex-col justify-between shadow-2xl overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-widest">{brandName}</span>
                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Circular Gift Certificate</h4>
                  </div>
                  <ShoppingBag size={24} className="text-rose-400" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Recipient:</span>
                  <p className="text-white font-heading font-black text-sm uppercase tracking-wide">{recipient || 'Jean-Luc'}</p>
                  <p className="text-zinc-400 text-[11px] italic font-light truncate">"{note || 'Happy circular holiday!'}"</p>
                </div>

                <div className="flex justify-between items-end border-t border-zinc-850 pt-4 mt-2">
                  <span className="text-[9px] font-mono text-zinc-600">ID: TT-90123-ECOLOGICAL</span>
                  <span className="text-3xl font-heading font-black text-rose-400">${giftAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Offers FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Discount & gift Q&A</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Promo FAQs</h2>
        </div>
        <EcomFAQ faqs={offersFaqs} />
      </section>
    </div>
  );
}

// ----------------------------------------------------
// 6. CONTACT VIEW
// ----------------------------------------------------
function ContactView() {
  const { brandName } = useDemo();
  
  // Fitting scheduler state
  const [scheduler, setScheduler] = useState({ showroom: 'Soho, New York', stylist: 'Evelyn Carter', date: '', time: '14:00', name: '', email: '' });
  const [scheduled, setScheduled] = useState(false);

  // General contact form state
  const [form, setForm] = useState({ name: '', email: '', subject: 'orders', msg: '' });
  const [sent, setSent] = useState(false);

  const handleBookFitting = (e) => {
    e.preventDefault();
    setScheduled(true);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: 'orders', msg: '' });
  };

  const contactFaqs = [
    { q: "Can showroom appointments be rescheduled?", a: "Yes, you can reschedule showroom fittings via your confirmation email or by contacting showroom desks 24 hours prior to slot timings." },
    { q: "Where do we drop off circular recycling items?", a: "Circular recycling items can be dropped off directly at any of our Soho, Shibuya, or Copenhagen showroom recycling boxes, or posted using our prepaid circular return labels." }
  ];

  return (
    <div className="space-y-0 animate-fadeIn bg-[#0b0b0e]">
      {/* Section 1: Inner Header */}
      <EcomInnerHeader title="Contact Support" subtitle="Get in touch with customer happiness or reserve a physical showroom private fitting." />

      {/* Section 2: Showroom Locations Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Physical spots</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Our Showrooms</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { location: "Soho, New York", address: "101 E-commerce Plz, Soho, New York", hours: "Mon-Sat: 10:00 - 20:00", phone: "+1 (555) 901-2345" },
            { location: "Shibuya, Tokyo", address: "4-90 Shibuya Main St, Tokyo Hub", hours: "Mon-Sun: 11:00 - 21:00", phone: "+81 (3) 555-9012" },
            { location: "Copenhagen Central", address: "Gothersgade 12, Copenhagen Central", hours: "Mon-Fri: 10:00 - 18:00", phone: "+45 55 90 12 34" }
          ].map((loc, idx) => (
            <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-2xl space-y-4 hover:border-zinc-800 transition-colors text-left">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block">{loc.location}</span>
              <p className="text-white text-sm font-semibold flex items-center gap-2"><MapPin size={14} className="text-rose-400 shrink-0" /> {loc.address}</p>
              <p className="text-zinc-500 text-xs flex items-center gap-2"><Clock size={14} className="text-rose-400 shrink-0" /> {loc.hours}</p>
              <p className="text-zinc-500 text-xs flex items-center gap-2"><Phone size={14} className="text-rose-400 shrink-0" /> {loc.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Interactive Fitting Room Scheduler */}
      <section className="py-24 bg-[#0e0e12] border-y border-zinc-900 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full w-fit mx-auto">
              Showroom Fittings
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Reserve Private Session</h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-xl mx-auto">
              Book a personal circular wardrobe consultation and fit trial at our showrooms. Meet with specialized design assistants.
            </p>
          </div>

          <div className="bg-[#121217] p-8 md:p-12 rounded-3xl border border-zinc-850">
            {scheduled ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-8 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-lg">✓</div>
                <h4 className="font-heading font-black text-white text-lg uppercase">Appointment Reserved</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-md mx-auto">
                  A private styling cabin has been booked at our <strong>{scheduler.showroom}</strong> showroom on <strong>{scheduler.date || 'tomorrow'}</strong> at <strong>{scheduler.time}</strong> with stylist <strong>{scheduler.stylist}</strong>. Sizing preferences are locked!
                </p>
                <button onClick={() => setScheduled(false)} className="text-xs text-rose-400 underline font-semibold mt-4 block mx-auto">Book another slot</button>
              </div>
            ) : (
              <form onSubmit={handleBookFitting} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Select Showroom</label>
                  <select 
                    value={scheduler.showroom}
                    onChange={(e) => setScheduler({ ...scheduler, showroom: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50"
                  >
                    <option>Soho, New York</option>
                    <option>Shibuya, Tokyo</option>
                    <option>Copenhagen Central</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Select Stylist</label>
                  <select 
                    value={scheduler.stylist}
                    onChange={(e) => setScheduler({ ...scheduler, stylist: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50"
                  >
                    <option>Evelyn Carter</option>
                    <option>Marcus Vance</option>
                    <option>Sora Tanaka</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Appointment Date</label>
                  <input 
                    type="date" 
                    required
                    value={scheduler.date}
                    onChange={(e) => setScheduler({ ...scheduler, date: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">Appointment Time</label>
                  <select 
                    value={scheduler.time}
                    onChange={(e) => setScheduler({ ...scheduler, time: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50"
                  >
                    <option>10:00</option>
                    <option>12:00</option>
                    <option>14:00</option>
                    <option>16:00</option>
                    <option>18:00</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-heading">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={scheduler.name}
                    onChange={(e) => setScheduler({ ...scheduler, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-heading">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={scheduler.email}
                    onChange={(e) => setScheduler({ ...scheduler, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                  />
                </div>

                <button type="submit" className="sm:col-span-2 bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2">
                  <span>Reserve Cabin Slot</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Operational Channels Stats */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { label: "Live Chat desk", value: "< 2 Minutes", desc: "Available for quick sizing adjustments on active packaging queues." },
          { label: "Email Support desk", value: "< 4 Hours", desc: "For detailed logistics carbon-offset tracking inquires." },
          { label: "Phone Hotline support", value: "24/7 Priority", desc: "Dedicated support lines for high-tier members." }
        ].map((item, idx) => (
          <div key={idx} className="bg-[#121217] border border-zinc-850 p-6 rounded-2xl">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">{item.label}</span>
            <span className="text-2xl font-heading font-black text-rose-400 block mt-2">{item.value}</span>
            <p className="text-zinc-550 text-xs font-light mt-1">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Section 5: Contact support form */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Message Happiness Desk</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">General Inquiries</h2>
        </div>

        <div className="bg-[#121217] p-8 md:p-12 rounded-3xl border border-zinc-850">
          {sent ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-xl text-center text-xs font-semibold">
              Thank you! Message logged successfully. Our ticket desk will respond shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmitContact} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase font-heading">Name</label>
                <input 
                  type="text" 
                  required 
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })} 
                  className="w-full bg-[#0b0b0e] border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase font-heading">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })} 
                  className="w-full bg-[#0b0b0e] border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider font-heading">Inquiry Subject</label>
                <select 
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-[#0b0b0e] border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50"
                >
                  <option value="orders">Active Order Queue</option>
                  <option value="sizing">Sizing & Sizing Advisor swaps</option>
                  <option value="circular">Circular Trade-in & Recycling credits</option>
                  <option value="wholesale">Wholesale & Cooperation inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase font-heading">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  value={form.msg} 
                  onChange={(e) => setForm({ ...form, msg: e.target.value })} 
                  className="w-full bg-[#0b0b0e] border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-500/50 resize-none" 
                />
              </div>

              <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all">
                Send Inquiry to Desk
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 6: Contact FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center space-y-3 mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">Support Q&A</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-black text-white uppercase">Contact FAQs</h2>
        </div>
        <EcomFAQ faqs={contactFaqs} />
      </section>
    </div>
  );
}

export default function EcommerceDemo() {
  const { subpage: urlSubpage } = useParams();
  const subpage = urlSubpage || 'home';
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.qty + amount;
            return { ...item, qty: nextQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setOrderPlaced(false);
      setIsCartOpen(false);
    }, 2500);
  };

  const renderSubpage = () => {
    switch (subpage) {
      case 'about': return <AboutView />;
      case 'shop': return <ShopView addToCart={addToCart} />;
      case 'collections': return <CollectionsView />;
      case 'offers': return <OffersView />;
      case 'contact': return <ContactView />;
      case 'home':
      default: return <HomeView addToCart={addToCart} />;
    }
  };

  return (
    <DemoLayout defaultBrand="Thread & Trend" slug="ecommerce" currentSubpage={subpage}>
      <div className="bg-[#0b0b0e] text-zinc-200 min-h-screen relative font-sans">
        <EcomNavbar
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
          totalCartCount={totalCartCount}
          setIsCartOpen={setIsCartOpen}
        />
        <main>{renderSubpage()}</main>
        <EcomFooter />

        {/* Dynamic Shopping Cart drawer */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black z-50 cursor-pointer"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-[#121217] border-l border-zinc-800 z-50 shadow-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-850 pb-4 mb-6">
                    <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                      <ShoppingBag size={20} className="text-rose-400" />
                      <span>Your Shopping Bag</span>
                    </h3>
                    <button onClick={() => setIsCartOpen(false)} className="text-zinc-400 hover:text-white">
                      <X size={20} />
                    </button>
                  </div>

                  {orderPlaced ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-3xl font-heading">
                        ✓
                      </div>
                      <h4 className="font-heading font-bold text-white text-lg">Order Complete!</h4>
                      <p className="text-zinc-400 text-xs font-light">Mock purchase checkout complete!</p>
                    </motion.div>
                  ) : cart.length === 0 ? (
                    <div className="text-center py-20 text-zinc-500 text-sm font-light">
                      Your bag is empty. Explore Shop to add.
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 bg-[#0b0b0e] p-3 rounded-xl border border-zinc-850/80">
                          <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                              <span className="text-xs font-heading font-semibold text-rose-400">${item.price}</span>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center bg-zinc-900 border border-zinc-850 rounded-md">
                                <button onClick={() => updateQty(item.id, -1)} className="p-1 text-zinc-400 hover:text-white">
                                  <Minus size={12} />
                                </button>
                                <span className="px-2 text-xs font-bold text-white">{item.qty}</span>
                                <button onClick={() => updateQty(item.id, 1)} className="p-1 text-zinc-400 hover:text-white">
                                  <Plus size={12} />
                                </button>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="text-zinc-500 hover:text-red-400">
                                  <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {!orderPlaced && cart.length > 0 && (
                  <div className="border-t border-zinc-850 pt-6 mt-6 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-400">Total Price:</span>
                      <span className="text-xl font-heading font-black text-white">${totalCartPrice}</span>
                    </div>
                    <button onClick={handleCheckout} className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all">
                      Proceed to Mock Checkout
                    </button>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </DemoLayout>
  );
}
