import { useState, useEffect } from 'react';

const slides = [
  {
    id: 'workflow',
    label: 'Workflow',
    title: 'Workflow',
    desc: 'Drag-and-drop multi-step automations with triggers, AI actions, and rules—built visually in minutes.',
    image: '/images/home/features/showcase-image-1.png',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Analytics',
    desc: 'Real-time dashboards surface trends, bottlenecks, and ROI at a glance—for faster decisions.',
    image: '/images/home/features/showcase-image-2.png',
  },
  {
    id: 'integration',
    label: 'Integration',
    title: 'Integration',
    desc: 'One-click connectors and an open API sync CRM, chat, calendar, and more—everything stays in sync.',
    image: '/images/home/features/showcase-image-3.png',
  },
];

const ShowcaseSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-black">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex justify-center mb-10 md:mb-16">
          {/* Gradient Badge from HTML reference */}
          <div
            className="p-[1px] rounded-[99px]"
            style={{
              background: 'linear-gradient(90deg, rgb(105, 51, 0) 0%, rgb(128, 30, 0) 32.88%, rgb(0, 0, 0) 54.05%, rgb(0, 105, 166) 100%)'
            }}
          >
            <div className="bg-black px-4 py-1.5 rounded-[14px]">
              <p className="font-sans text-[16px] leading-[14px] font-medium text-white tracking-widest uppercase">
                Product Features
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-center font-['Inter'] text-3xl md:text-5xl lg:text-[60px] font-medium leading-[1.1] lg:leading-[60px] text-white mb-10 md:mb-16">
          Build Workflows, Track Insights, {" "} <br className="hidden md:block" />
          Connect Tools
        </h2>

        {/* Feature Display Area */}
        <div className="mb-10 md:mb-16">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-[#050505]">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <div className="flex items-center justify-center p-0 md:p-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bars - Centered & Grouped */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setActive(i)}
              className="h-[3px] w-12 sm:w-20 cursor-pointer rounded-full overflow-hidden bg-white/20 relative"
            >
              {active === i && (
                <div className="absolute inset-y-0 left-0 bg-[#da4e24] w-full animate-[progress-fill_7s_linear] origin-left" />
              )}
            </div>
          ))}
        </div>

        {/* Navigation / Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1140px] mx-auto">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="cursor-pointer group flex flex-col"
              onClick={() => setActive(i)}
            >
              <div
                className={`text-center md:text-left font-['Inter'] text-[16px] leading-[26px] font-normal transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-50'
                  }`}
              >
                <strong className="font-bold text-white">
                  {slide.title}:
                </strong>{' '}
                <span className="text-white">
                  {slide.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

