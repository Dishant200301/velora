import { Link } from 'react-router-dom';
import logo from '/images/common/logos/logo.jpg';
import GradientButton from '@/components/ui/GradientButton';

const CTASection = ({ transparent = false }: { transparent?: boolean }) => {
  return (
    <section
      className={`section-padding relative overflow-hidden ${transparent
        ? 'bg-transparent'
        : "bg-[url('/images/common/backgrounds/footer-bg.png')] bg-cover bg-center bg-scroll md:bg-fixed"
        }`}
    >
      {/* Top black gradient — blends from preceding sections — hidden when transparent to avoid double darkness */}
      {!transparent && (
        <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-b from-black to-transparent z-10" />
      )}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 text-center">
        <img
          src={logo}
          alt="Velora"
          className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-full animate-spin-slow"
        />
        <h2 className="mb-6 text-[36px] leading-[1.1] md:text-[60px] md:leading-[60px] font-sans font-medium text-white">
          Start Your AI Automation<br className="hidden md:block" /> Journey Today
        </h2>
        <p className="mb-10 max-w-[620px] mx-auto font-sans font-normal text-base leading-[26px] text-white">
          Sign up for Velora and let AI handle your routine tasks—no credit card needed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-[220px]">
            <GradientButton className='w-full h-full min-h-[54px] px-4 flex items-center justify-center'>
              <span className="font-sans font-medium text-base leading-[26px] text-white">
                Get Started - Free
              </span>
            </GradientButton>
          </Link>
          <Link
            to="/pricing"
            className="w-full sm:w-[220px] min-h-[54px] px-4 rounded-xl border border-white/20 transition-all duration-300 group hover:border-white/40 text-center flex items-center justify-center"
          >
            <div className="text-slide-up overflow-hidden h-[26px]">
              <div className="text-slide-inner flex flex-col">
                <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                  View Pricing
                </span>
                <span className="flex items-center justify-center whitespace-nowrap h-[26px] font-sans font-medium text-base leading-[26px] text-white">
                  View Pricing
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

