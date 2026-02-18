
import { Link } from 'react-router-dom';
import logo from '/images/common/logos/logo.jpg';

// Generate paths for logos 1-10
const row1Logos = Array.from({ length: 10 }, (_, i) => `/images/common/logos/partners/logo-${i + 1}.svg`);

// Generate paths for logos 11-20
const row2Logos = Array.from({ length: 10 }, (_, i) => `/images/common/logos/partners/logo-${i + 11}.svg`);

const IntegrationMarquee = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      <div className="max-w-[1140px] mx-auto px-4 text-center relative z-0">
        <div className="mb-12 md:mb-20">
          <div className="gradient-badge inline-block mb-6">
            <div className="gradient-badge-inner px-4 py-1.5 font-['Inter'] font-medium text-[14px] leading-[16px] uppercase tracking-wider text-white">
              Powerful Integrations
            </div>
          </div>
          <h2 className="font-['Inter'] text-4xl md:text-5xl lg:text-[60px] font-medium leading-[1.1] lg:leading-[60px] text-white relative z-20">
            Seamlessly Integrate<br className='md:block hidden' />Every App
          </h2>
        </div>

        {/* Central Globe/Orb Element */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-100 pointer-events-none z-10">
          {/* Darkened Orb Effect */}
          <div className="absolute inset-0 rounded-full bg-black/40 blur-3xl z-10" />
          <img
            src={logo}
            alt=""
            className="w-full h-full object-cover rounded-full animate-spin-slow opacity-80 mix-blend-screen"
          />
        </div>

        {/* Marquee Container - Increased z-index to be above the orb */}
        <div className="relative z-20 space-y-6 mb-12 md:space-y-8 md:mb-20">
          {/* Row 1 - Left to Right */}
          <div className="marquee-mask overflow-hidden">
            <div className="flex animate-marquee-reverse" style={{ '--duration': '10s' } as React.CSSProperties}>
              {[...row1Logos, ...row1Logos].map((src, i) => (
                <div key={i} className="mx-3 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card border border-white/10 flex items-center justify-center transition-transform duration-300 group">
                    <img src={src} alt={`Integration ${i}`} className="w-10 h-10 object-contain opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="marquee-mask overflow-hidden">
            <div className="flex animate-marquee" style={{ '--duration': '10s' } as React.CSSProperties}>
              {[...row2Logos, ...row2Logos].map((src, i) => (
                <div key={i} className="mx-3 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card border border-white/10 flex items-center justify-center transition-transform duration-300 group">
                    <img src={src} alt={`Integration ${i}`} className="w-10 h-10 object-contain opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/integration"
          className="group inline-flex items-center justify-center px-8 md:px-12 py-3 rounded-xl border border-white/20 font-['Inter'] text-[16px] leading-[26px] font-medium transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative overflow-hidden text-white">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Explore All
            </span>
            <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              Explore All
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default IntegrationMarquee;

