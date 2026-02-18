import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/images/common/logos/logo.jpg';
import GradientButton from '@/components/ui/GradientButton';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About us', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Integration', path: '/integration' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Waitlist', path: '/waitlist' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-7 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1140px]">
      <div className="glass-nav rounded-xl px-4 h-[60px] flex items-center justify-between relative z-50 bg-black/40 backdrop-blur-xl border border-white/10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Velora AI" className="w-10 h-10 rounded-full" />
          <span className="tracking-tight text-[24px] leading-[24px] md:text-[32px] md:leading-[32px] font-medium text-white font-['General_Sans',_'General_Sans_Placeholder',_sans-serif]">
            Velora AI
          </span>
        </Link>

        {/* Desktop Menu - Visible only on XL screens (1280px+) */}
        <div className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label + link.path}
              to={link.path}
              className={`font-medium transition-opacity duration-300 text-base leading-[26px] text-white font-sans ${location.pathname === link.path ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="hidden xl:block">
          <GradientButton size="sm">
            <span className="font-sans font-medium text-base leading-[26px] text-white">
              Get Started
            </span>
          </GradientButton>
        </Link>

        {/* Mobile Toggle Button - Visible up to XL screens (<1280px) */}
        <button
          className="xl:hidden p-2 text-white/80 hover:text-white transition-colors flex flex-col items-center justify-center gap-[6px] w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full origin-center"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white rounded-full origin-center"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden glass-nav h-[83vh] md:h-[90vh] rounded-xl mt-2 p-6 flex flex-col gap-4 bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label + link.path}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + (index * 0.1),
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium py-2 transition-colors font-sans text-lg leading-[28px] ${location.pathname === link.path ? 'text-white' : 'text-white/70 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (navLinks.length * 0.1), duration: 0.4 }}
              className="mt-2 w-fit"
            >
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <GradientButton size="md">
                  <span className="font-sans font-medium text-base leading-[26px] text-white">
                    Get Started
                  </span>
                </GradientButton>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

