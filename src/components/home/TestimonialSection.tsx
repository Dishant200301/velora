import { useState, useEffect } from 'react';
import GradientBadge from '@/components/ui/GradientBadge';

const testimonials = [
  {
    companyLogo: '/images/common/icons/business.png',
    companyName: 'venture',
    text: '"Seamless Slack and Salesforce integrations keep our team in sync. Fusion AI ensures everyone\'s on the same page."',
    image: '/images/home/reviews/review-1.png',
    name: 'Mat Mursmark',
    role: 'Chief Growth Officer',
  },
  {
    companyLogo: '/images/common/icons/application.png',
    companyName: 'application',
    text: '"Fusion AI cut our onboarding time by 50%—setup was effortless, and our AI agents are now core to daily ops."',
    image: '/images/home/reviews/review-2.png',
    name: 'Chris Milkulin',
    role: 'Performance Marketer',
  },
  {
    companyLogo: '/images/common/logos/statup-logo.png',
    companyName: 'startup',
    text: '"Automating lead follow-ups boosted our conversion rate by 30% without adding headcount. Fusion AI is a game-changer."',
    image: '/images/home/reviews/review-3.png',
    name: 'Audrey Madden',
    role: 'Chief Growth Officer',
  },
  {
    companyLogo: '/images/common/icons/company.png',
    companyName: 'enterprise',
    text: '"We replaced 5 manual workflows in a single week. The visual builder made it incredibly easy to automate complex tasks."',
    image: '/images/home/reviews/review-4.png',
    name: 'James Chen',
    role: 'VP Engineering',
  },
  {
    companyLogo: '/images/common/icons/application.png',
    companyName: 'platform',
    text: '"The multi-channel automation saved us 20+ hours per week. Our team can finally focus on creative work instead of admin."',
    image: '/images/home/reviews/review-5.png',
    name: 'Sarah Kim',
    role: 'Operations Director',
  },
];

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mx-auto w-[calc(100%-0rem)] max-w-[1140px] py-[100px] overflow-hidden bg-black flex flex-col items-center gap-[60px] rounded-3xl">
      {/* Background Shape */}
      <div className="absolute inset-x-0 bottom-0 top-44 md:top-[400px] lg:top-[300px] right-0 md:h-[40%] lg:h-[60%] w-full pointer-events-none">
        <img
          src="/images/home/reviews/testimonial-bg.png"
          alt="background gradient shape"
          className="w-full h-full object-cover opacity-100 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left px-4 xl:px-0">
        <GradientBadge variant="primary" className="mb-6">
          <span className="font-sans font-medium text-white text-sm leading-4 uppercase tracking-wider">SUCCESS STORIES</span>
        </GradientBadge>
        <h2 className="text-3xl md:text-[50px] md:leading-[50px] lg:text-[60px] lg:leading-[60px] font-medium text-white font-sans max-w-[800px]">
          Hear from our customers<br className="hidden md:block" /> & their success stories
        </h2>
      </div>

      {/* Desktop Marquee Container */}
      <div className="hidden lg:block relative w-full overflow-hidden h-[424px]">
        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-[100px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[100px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee [--duration:20s] ">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 mx-2.5">
              <div
                className="relative flex flex-col justify-between px-10 py-6 rounded-[16px] border border-white/15 bg-white/[0.02] backdrop-blur-[7px]"
                style={{ width: '364px', height: '424px' }}
              >

                {/* Top Content */}
                <div className="flex flex-col gap-8 mt-4">
                  <div className="h-8 flex items-center">
                    <img src={t.companyLogo} alt={t.companyName} className="h-full w-auto object-contain brightness-0 invert opacity-100 max-w-[140px]" />
                  </div>
                  <p className="text-white text-[16px] leading-[26px] font-medium font-['Inter']">
                    {t.text}
                  </p>
                </div>

                {/* Bottom Content */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[60px] h-[60px] rounded-[8px] overflow-hidden bg-black shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[16px] leading-[26px] font-medium font-['Inter']">{t.name}</span>
                    <span className="text-white text-[14px] leading-[21px] font-normal font-['Inter']">{t.role}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden w-full flex flex-col items-center px-4 ">
        <div className="w-full max-w-[364px] md:max-w-[464px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <div
                  className="relative flex flex-col justify-between px-10 py-6 rounded-[16px] border border-white/15 bg-white/[0.02] backdrop-blur-[7px]"
                  style={{ width: '100%', height: '424px' }}
                >
                  {/* Top Content */}
                  <div className="flex flex-col gap-8 mt-4">
                    <div className="h-8 flex items-center">
                      <img src={t.companyLogo} alt={t.companyName} className="h-full w-auto object-contain brightness-0 invert opacity-100 max-w-[140px]" />
                    </div>
                    <p className="text-white text-[16px] leading-[26px] font-medium font-['Inter']">
                      {t.text}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-[60px] h-[60px] rounded-[8px] overflow-hidden bg-black shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[16px] leading-[26px] font-medium font-['Inter']">{t.name}</span>
                      <span className="text-white text-[14px] leading-[21px] font-normal font-['Inter']">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white scale-125' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default TestimonialSection;

