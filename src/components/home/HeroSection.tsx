import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Sparkles, Send, ArrowRight } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

const typingTexts = [
  'Generate weekly sales summary report',
  'Create CRM contact from emails',
  'Schedule meetings and send invites automatically',
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // Wait bit longer before deleting
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 25);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[100dvh] md:min-h-[1200px] w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/common/backgrounds/contact-bg.png")',
          backgroundPosition: 'center top',
        }}
      />

      {/* Hero Video (Abstract Background) */}
      <div className="absolute -right-[20%] top-0 h-[500px] w-[800px] md:right-[-300px] md:h-[958px] md:w-[1437px] opacity-60 mix-blend-screen pointer-events-none z-[1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        >
          <source src="/images/home/hero/ai.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1140px] px-4 xl:px-0 pt-[150px] md:pt-[150px]">

        {/* Badge */}
        <div className="mb-[42px] flex justify-center md:justify-start">
          <div className="relative flex items-center justify-center rounded-full p-[1px]">
            <div
              className="absolute inset-0 rounded-full opacity-100"
              style={{
                background: 'linear-gradient(90deg, #693300 0%, #801E00 32.88%, #000000 54.05%, #0069A6 100%)'
              }}
            />
            <div className="relative flex items-center gap-2 rounded-full bg-black px-4 py-[6px]">
              <span className="font-inter text-[12px] md:text-[14px] font-medium uppercase tracking-wide text-white leading-[16px]">
                Supercharge Your AI Workflows
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-[40px] md:max-w-[1000px] text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-inter text-[38px] md:text-[56px] lg:text-[76px] font-medium max-w-[600px] leading-[1.1] md:leading-[100%] text-white tracking-[-0.02em]">
            Automate Your AI Workflows with AI Agent
          </h1>
        </div>

        {/* Description */}
        <p className="mb-[56px] max-w-[600px] font-inter text-[16px] md:text-[18px] font-normal leading-[1.6] md:leading-[28px] text-white text-center md:text-left mx-auto md:mx-0 opacity-100 md:opacity-100">
          Connect your favorite apps, set triggers and watch AI handle the
          rest - no coding required. Get up and running in minutes.
        </p>

        {/* CTA Buttons - Using GradientButton for slide animation */}
        <div className="mb-16 md:mb-32 flex flex-col items-center md:items-start gap-4 sm:flex-row justify-center md:justify-start">
          <Link to="/contact" className="w-full sm:w-auto">
            <GradientButton className='w-full h-full min-h-[50px] md:min-h-[54px] px-4 flex items-center justify-center'>
              <span className="font-sans font-medium text-base leading-[26px] text-white">
                Get Started - Free
              </span>
            </GradientButton>
          </Link>
          <Link
            to="/pricing"
            className="w-full sm:w-[180px] min-h-[50px] md:min-h-[54px] px-4 rounded-xl border border-white/20 transition-all duration-300 group hover:border-white/40 text-center flex items-center justify-center"
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

        {/* Dashboard Interface Mockup */}
        <div className="hidden md:block relative mx-auto mt-0 md:mt-[30px] lg:mt-[0px] w-full max-w-[1140px]">

          {/* Background Dashboard Image */}
          <div className="relative z-20 overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm min-h-[250px] md:min-h-0">
            <img
              src="/images/home/hero/image.png"
              alt="Dashboard Mockup"
              className="w-full object-cover opacity-80"
            />
            {/* Gradient Mask for Image */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" /> */}
          </div>

          {/* Floating Input UI Card */}
          <div className="absolute left-1/2 top-[45%] md:top-[30px] lg:top-[30px] z-20 w-[95%] sm:w-[90%] md:w-[75%] lg:max-w-[750px] -translate-x-1/2 -translate-y-1/2">

            {/* Card Container */}
            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#000000] p-6 shadow-2xl h-[186px]">

              {/* Top Bar: Model Selector & Globe */}
              <div className="absolute top-[16px] left-[16px] flex items-center gap-2">
                {/* GPT Selector */}
                <button className="flex h-[37px] w-[163px] items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 backdrop-blur-[1px] transition-colors hover:bg-white/10">
                  <div className="relative flex items-center justify-center">
                    <img src="/images/common/logos/partners/logo-1.svg" alt="GPT" className="w-[20px] h-[20px] opacity-80" />
                  </div>
                  <span className="font-inter text-sm text-white">GPT 4.5</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-auto opacity-50">
                    <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Globe Icon */}
                <button className="flex h-[37px] w-[37px] items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-[3px] transition-colors hover:bg-white/10">
                  <Globe className="h-5 w-5 text-white/50" />
                </button>
              </div>

              {/* Middle: Input Area - Typing Animation */}
              <div className="absolute top-[77px] left-[16px] right-[16px]">
                <div className="flex items-center text-[17px] font-medium text-white/90 font-inter">
                  {displayText}
                  <span className="ml-[2px] h-5 w-[2px] animate-pulse bg-white/50" />
                </div>
              </div>

              {/* Bottom: Action Buttons */}
              <div className="absolute bottom-[16px] left-[16px] right-[16px] flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto flex-1 [&::-webkit-scrollbar]:hidden pr-2">
                  {['Chat', 'Launch Workflow', 'Data Analysis'].map((item, index) => (
                    <button
                      key={index}
                      className="flex h-[37px] items-center rounded-lg border border-white/10 bg-white/5 px-4 text-[14px] text-white backdrop-blur-[3px] transition-colors hover:bg-white/10"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Send Button using GradientButton */}
                <div className='w-[86px] h-[36px]'>
                  <GradientButton size="sm" className='!p-0 w-full h-full flex items-center justify-center !text-sm'>
                    <img src="/images/common/icons/star.png" alt="star" className="w-[20px] h-[20px] mr-1" />
                    <span className='mr-2'>Send</span>
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

