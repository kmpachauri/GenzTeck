import { useState } from 'react';
import DemoLayout, { useDemo } from '../../components/DemoLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Plus, Minus, Trash2, CheckCircle2, ShieldCheck, X } from 'lucide-react';

function EcommerceContent() {
  const { brandName } = useDemo();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = [
    { id: 1, name: 'Minimalist Leather Backpack', price: 125, rating: 4.8, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Premium Noise-Cancelling Headphones', price: 299, rating: 4.9, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Chrono Series Rose Gold Watch', price: 185, rating: 4.7, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Activeknit Training Shoes', price: 95, rating: 4.6, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80' }
  ];

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

  return (
    <div className="bg-[#0b0b0e] text-zinc-200 min-h-screen relative">
      {/* Promotion Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-rose-500 text-white text-center py-2 text-xs font-bold uppercase tracking-widest relative z-30">
        ✨ Flat 20% Off Storewide | Code: {brandName.replace(/\s+/g, '').toUpperCase()}20
      </div>

      {/* Navbar */}
      <nav className="border-b border-rose-500/10 bg-[#0b0b0e]/95 backdrop-blur-md sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
            <ShoppingBag size={20} className="text-rose-400" />
            {brandName}
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-zinc-400">
            <a href="#new-arrivals" className="hover:text-rose-400 transition-colors">Shop</a>
            <a href="#about" className="hover:text-rose-400 transition-colors">Our Ethos</a>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-rose-400 transition-colors flex items-center gap-1"
          >
            <ShoppingBag size={20} />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-28 md:py-36 text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0b0b0e]/75 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative z-20 max-w-4xl px-6 space-y-6">
          <span className="text-rose-400 text-xs font-bold tracking-[6px] uppercase block">
            Elegance & Utility
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-none uppercase">
            Curated Premium Essentials By <span className="text-rose-400">{brandName}</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Minimalist products crafted with precision, premium global materials, and free carbon-neutral shipping worldwide.
          </p>
          <div className="pt-4">
            <a
              href="#new-arrivals"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all inline-block hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]"
            >
              Shop New Arrivals
            </a>
          </div>
        </div>
      </header>

      {/* Trust Accreditations */}
      <section className="bg-[#121217] border-y border-rose-500/10 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rose-400" size={18} />
            <span>Secure 256-bit Encrypted Checkouts</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rose-400" size={18} />
            <span>Carbon-Neutral Global Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-rose-400" size={18} />
            <span>30-Day Hassle-Free Refunds</span>
          </div>
        </div>
      </section>

      {/* New Arrivals Product Grid */}
      <section className="py-24 max-w-6xl mx-auto px-6" id="new-arrivals">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">
            Collection
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-1">
            Shop New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#121217]/50 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs text-zinc-400 mb-1">
                    <span className="flex items-center gap-1 text-yellow-500">
                      <Star size={12} fill="currentColor" />
                      <span>{p.rating}</span>
                    </span>
                    <span>Free Shipping</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base leading-snug">{p.name}</h3>
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-lg font-heading font-black text-white">${p.price}</span>
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-lg transition-all"
                    title="Add to Cart"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethos section */}
      <section className="py-24 bg-[#121217]/30 border-t border-[#121217]" id="about">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-rose-400 text-xs font-bold tracking-[3px] uppercase">
              Brand Ethos
            </span>
            <h2 className="text-3xl font-heading font-bold text-white">
              Bespoke Design, Made Responsibly
            </h2>
            <p className="text-zinc-400 leading-relaxed font-light text-sm">
              We believe in producing fewer things of higher quality. {brandName} aligns with boutique manufacturers that secure carbon-neutral materials, pay fair wages, and build structures that stand the test of time.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
              alt="Quality crafting"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -inset-2 rounded-2xl border border-rose-500/10 transform rotate-1 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Cart Sidebar drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Cart drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#121217] border-l border-zinc-800 z-50 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
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
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-3xl">
                      ✓
                    </div>
                    <h4 className="font-heading font-bold text-white text-lg">Order Placed Successfully!</h4>
                    <p className="text-zinc-400 text-xs font-light">
                      Mock purchase complete! Checkout flow configured.
                    </p>
                  </motion.div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-20 text-zinc-500 text-sm font-light">
                    Your shopping cart is currently empty. Add products to populate.
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-[#0b0b0e] p-3 rounded-xl border border-zinc-800/80">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                            <span className="text-xs font-heading font-semibold text-rose-400">${item.price}</span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md">
                              <button onClick={() => updateQty(item.id, -1)} className="p-1 text-zinc-400 hover:text-white">
                                <Minus size={12} />
                              </button>
                              <span className="px-2 text-xs font-bold text-white">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, 1)} className="p-1 text-zinc-400 hover:text-white">
                                <Plus size={12} />
                              </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-zinc-500 hover:text-red-400" title="Delete">
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
                <div className="border-t border-zinc-800 pt-6 mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Total Price:</span>
                    <span className="text-xl font-heading font-black text-white">${totalCartPrice}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                  >
                    Proceed to Mock Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-zinc-900 py-12 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-6 space-y-4">
          <div className="font-heading font-bold text-base text-rose-400">🛍️ {brandName}</div>
          <p>© {new Date().getFullYear()} {brandName}. Minimalist luxury storefront.</p>
        </div>
      </footer>
    </div>
  );
}

export default function EcommerceDemo() {
  return (
    <DemoLayout defaultBrand="Thread & Trend" slug="ecommerce">
      <EcommerceContent />
    </DemoLayout>
  );
}
