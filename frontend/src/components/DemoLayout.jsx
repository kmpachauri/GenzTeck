import { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Send, ChevronUp, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DemoContext = createContext({ brandName: '', slug: '' });

export const useDemo = () => useContext(DemoContext);

export default function DemoLayout({ children, defaultBrand = 'My Brand', slug = 'general' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read brand name from search params or fallback
  const urlBrand = searchParams.get('brand');
  const [brandName, setBrandName] = useState(urlBrand || defaultBrand);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sync state with URL parameter if it changes
  useEffect(() => {
    if (urlBrand) {
      setBrandName(urlBrand);
    } else {
      setBrandName(defaultBrand);
    }
  }, [urlBrand, defaultBrand]);

  const handleBrandChange = (newVal) => {
    setBrandName(newVal);
    setSearchParams({ brand: newVal || defaultBrand }, { replace: true });
  };

  const handleBackToGallery = () => {
    navigate('/demos');
  };

  return (
    <DemoContext.Provider value={{ brandName: brandName || defaultBrand, slug }}>
      <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-cyan-500 selection:text-black relative">
        {/* Interactive Customizer Bar */}
        <div className="sticky top-0 z-50 w-full">
          <AnimatePresence initial={false}>
            {!isCollapsed && (
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-full bg-[#0D0D1A]/90 backdrop-blur-md border-b border-white/10 px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50"
              >
                {/* Left: Branding & Tag */}
                <div className="flex items-center gap-3">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    </div>
                    <span className="font-heading font-bold text-sm tracking-tight hidden sm:inline text-white">
                      Genz<span className="text-cyan-400">Teck</span>
                    </span>
                  </Link>
                  <div className="h-4 w-px bg-white/20 hidden sm:block" />
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles size={10} /> Preview Lab
                  </span>
                </div>

                {/* Center: Brand Customizer Editor */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-full max-w-sm">
                  <span className="text-xs font-semibold text-[#8A8AA0] whitespace-nowrap pl-1">
                    Customize Brand:
                  </span>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => handleBrandChange(e.target.value)}
                    placeholder={defaultBrand}
                    className="bg-transparent border-none outline-none text-xs text-white placeholder-white/40 w-full focus:ring-0 focus:outline-none py-0 px-1"
                  />
                </div>

                {/* Right: CTA Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleBackToGallery}
                    className="flex items-center gap-1.5 text-xs text-[#8A8AA0] hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Gallery</span>
                  </button>

                  <Link
                    to={`/contact?service=Website&demo=${slug}&brand=${encodeURIComponent(brandName || defaultBrand)}`}
                    className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold px-4 py-2 rounded-xl hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all hover:scale-[1.02]"
                  >
                    <span>Get This Site</span>
                    <Send size={12} />
                  </Link>

                  <button
                    onClick={() => setIsCollapsed(true)}
                    className="p-2 text-white/40 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                    title="Hide Toolbar"
                  >
                    <ChevronUp size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tiny tab to show toolbar if collapsed */}
          {isCollapsed && (
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 z-50"
            >
              <button
                onClick={() => setIsCollapsed(false)}
                className="bg-[#0D0D1A] border-b border-x border-white/15 px-4 py-1.5 rounded-b-xl flex items-center gap-1.5 text-[10px] uppercase font-bold text-cyan-400 hover:text-cyan-300 hover:bg-[#121225] transition-all shadow-lg"
              >
                <span>Show Customizer Toolbar</span>
                <ChevronDown size={12} />
              </button>
            </motion.div>
          )}
        </div>

        {/* Demo Website Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </DemoContext.Provider>
  );
}
